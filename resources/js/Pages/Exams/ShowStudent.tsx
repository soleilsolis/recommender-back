import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Breadcrumbs, Typography, Button } from '@material-tailwind/react';
import AppLayout from '@/Layouts/AppLayout';

import { HomeIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';

interface Props {
	exam: any;
	score: any;
	categoryGroup: any;
	total: any;
	radarMap: any;
}

import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);

export default function ShowStudent({ exam, score, total, radarMap }: Props) {
	const route = useRoute();
	const page = useTypedPage();

	console.log(radarMap);
	const data = {
		labels: exam.categories.map(category => category.name),
		datasets: [
			{
				label: '# of Votes',
				data: Object.values(radarMap).map(category => {
					const correct =
						category[1] != undefined ? category[1].length : 0;
					const total = correct + category[0].length;

					return (correct / total) * 100;
				}),
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			},
			{
				label: ' ',
				data: Object.values(radarMap).map(category => 100),
				backgroundColor: 'rgba(0, 0, 0, 0)',
				borderColor: 'rgba(0, 0, 0, 0)',
				borderWidth: 1,
			},
		],
	};

	const options = {
		scale: {
			ticks: {
				beginAtZero: true,
				max: 100,
				min: 0,
				stepSize: 20,
			},
		},
	};

	return (
		<AppLayout title={`${exam.name}`}>
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<Breadcrumbs>
						<Link href="/dashboard" className="opacity-60">
							<HomeIcon className="h-4 w-4" />
						</Link>
						<Link href="/exams" className="opacity-60">
							<span>Exams</span>
						</Link>
						<Link href={`/exam/${exam.id}`}>
							<span>{exam.id}</span>
						</Link>
					</Breadcrumbs>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-4">
						<div>
							<Typography variant="h2" color="blue-gray">
								{exam.name} (
								{exam.attempts - exam.instances.length}{' '}
								Attempts){' '}
							</Typography>
							<Typography
								variant="h6"
								color="blue-gray"
								className="my-2 flex items-center gap-2"
							>
								<img
									className="h-10 w-10 rounded-full object-cover"
									src={exam.team.owner.profile_photo_url}
									alt={exam.team.owner.name}
								/>
								{exam.team.owner.name} - {exam.team.name}
							</Typography>
						</div>

						<div className="md:text-right">
							<Typography variant="h2">
								Score: {score} / {total}
							</Typography>
						</div>
					</div>

					{exam.attempts - exam.instances.length != 0 && (
						<Link href={route('exam.take', { id: exam.id })}>
							<Button
								color="green"
								size="lg"
								className="flex items-center gap-3 my-5"
							>
								<PlusIcon className="h-5 w-5" /> Take Exam
							</Button>
						</Link>
					)}

					<Typography variant="h3" className="mb-5 mt-10">
						Stats
					</Typography>

					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-x-0 gap-y-6">
						<div>
							<Radar data={data} options={options} />
						</div>
						<div>
							{Object.values(radarMap).map((category, index) => {
								const correct =
									category[1] != undefined
										? category[1].length
										: 0;
								const total = correct + category[0].length;

								return (
									<>
										<Typography
											variant="h3"
											className="md:text-right mb-4"
										>
											{Object.keys(radarMap)[index]} :{' '}
											{correct} /{total}
										</Typography>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}
