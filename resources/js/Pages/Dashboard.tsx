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
	examsCreated: any;
	failedAttempts: any;
	examsTaken: any;
	students: any;
	exams: any,
}
export default function Dashboard({
	examsCreated,
	failedAttempts,
	examsTaken,
	students,
	exams,
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
				text: 'Student Passing Rate for the past 5 Exams',
			},
		},
	};

	const labels = exams.reverse().slice(exams.length-5).map(exam => exam.name);

	const data = {
		labels,
		datasets: [
			{
				label: 'Failed',
				data:  exams.reverse().slice(exams.length-5).map(exam => exam.failed),
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Passed',
				data:  exams.reverse().slice(exams.length-5).map(exam => exam.passed),
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
									{students}
								</Typography>
								<Typography variant="h6">Students</Typography>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<Typography variant="h3" color="black">
									{examsCreated}
								</Typography>
								<Typography variant="h6">Exams</Typography>
							</CardBody>
						</Card>
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
									{failedAttempts}
								</Typography>
								<Typography variant="h6">
									Failed Attempts
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
