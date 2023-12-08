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

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Student Passing Rate',
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Failed',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 1000 }),
			),
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Passed',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 1000 }),
			),
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};
export default function Dashboard() {
	const page = useTypedPage();
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
									20
								</Typography>
								<Typography variant="h6">Students</Typography>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<Typography variant="h3" color="black">
									5
								</Typography>
								<Typography variant="h6">Exams</Typography>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<Typography variant="h3" color="black">
									200
								</Typography>
								<Typography variant="h6">
									Total Exams Taken
								</Typography>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<Typography variant="h3" color="black">
									500
								</Typography>
								<Typography variant="h6">
									Recommendations
								</Typography>
							</CardBody>
						</Card>
					</div>
					<Bar className='my-5' options={options} data={data} />;
				</div>
			</div>
		</AppLayout>
	);
}
