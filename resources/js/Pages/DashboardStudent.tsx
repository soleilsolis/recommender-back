import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import useTypedPage from '@/Hooks/useTypedPage';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { faker } from '@faker-js/faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

interface Props {
	examsTaken: any;
	passed: any;
	failed: any;
	instances: any;
}
export default function Dashboard({
	examsTaken,
	passed,
	failed,
	instances,
}: Props) {
	const page = useTypedPage();
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: 'Wrong to Correct Answer Ratio on past 5 Exam Attempts',
			},
		},
	};

	const labels = instances
		.reverse()
		.slice(instances.length - 5)
		.map(instance => instance.exam.name);

	const data = {
		labels,
		datasets: [
			{
				label: 'Wrong',
				data: instances
					.reverse()
					.slice(instances.length - 5)
					.map(instance => instance.total - instance.correct),

				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Correct',
				data: instances
					.reverse()
					.slice(instances.length - 5)
					.map(instance => instance.correct),
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return (
		<AppLayout
			title="Dashboard"
			renderHeader={() => (
				<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
					Welcome, {page.props.auth.user?.name}!
				</h2>
			)}
		>
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<Card>
							<CardBody>
								<Typography variant="h3" color="black">
									{examsTaken}
								</Typography>
								<Typography variant="h6">
									Total Exams Taken
								</Typography>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<Typography variant="h3" color="black">
									{passed}
								</Typography>
								<Typography variant="h6">
									Exams Passed
								</Typography>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<Typography variant="h3" color="black">
									{failed}
								</Typography>
								<Typography variant="h6">
									Exams Failed
								</Typography>
							</CardBody>
						</Card>
					</div>
					<Bar className="my-5" options={options} data={data} />;
				</div>
			</div>
		</AppLayout>
	);
}
