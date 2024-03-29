import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import {
	Breadcrumbs,
	Typography,
	Button,
	Card,
	CardBody,
	CardHeader,
} from '@material-tailwind/react';
import AppLayout from '@/Layouts/AppLayout';

import { HomeIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import ReactHtmlParser, {
	processNodes,
	convertNodeToElement,
	htmlparser2,
} from 'react-html-parser';

interface Props {
	exam: any;
	score: any;
	categoryGroup: any;
	total: any;
	radarMap: any;
	instances: any;
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
import moment from 'moment';

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
);

export default function ShowStudent({
	exam,
	score,
	total,
	radarMap,
	instances,
}: Props) {
	const route = useRoute();
	const page = useTypedPage();

	const radarData = {
		labels: exam.categories.map(category => category.name),
		datasets: [
			{
				label: 'Categories',
				data: Object.values(radarMap).map(category => {
					return (category.correct / category.total) * 100;
				}),
				backgroundColor: 'rgba(0, 255, 0, 0.2)',
				borderColor: '#00B200',
				borderWidth: 1,
			},
		],
	};

	const radarOptions = {
		responsive: true,
		scales: {
			r: {
				angleLines: {
					display: true,
				},
				suggestedMin: 0,
				suggestedMax: 100,
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
						<Link href="/exams/student" className="opacity-60">
							<span>Exams</span>
						</Link>
						<Link href={`/exam/${exam.id}`}>
							<span>{exam.name}</span>
						</Link>
					</Breadcrumbs>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-4 mt-6">
						<div>
							<Typography variant="h2" color="blue-gray">
								{exam.name}
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
					</div>

					{exam.attempts - exam.instances.length != 0 &&
						moment(exam.expires_at) > moment() && (
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

					{moment(exam.expires_at) < moment() &&
						exam.instances.length != 0 && (
							<>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-y-2">
									<Card className=" h-max my-5">
										<CardBody className="h-max text-center">
											<Typography
												variant="h3"
												color={
													(score / total) * 100 < 50
														? 'red'
														: 'green'
												}
											>
												Score: {score} / {total}
											</Typography>
										</CardBody>
									</Card>

									<Card className=" h-max my-5">
										<CardBody className="h-max text-center">
											<Typography
												variant="h3"
												color="black"
											>
												Attempts:{' '}
												{exam.instances.length} /{' '}
												{exam.attempts}
											</Typography>
										</CardBody>
									</Card>
								</div>

								<Typography variant="h3" className="my-5 ">
									Stats
								</Typography>

								<Card className="mb-2">
									<CardBody>
										<Typography
											variant="h4"
											color="black"
											className="mb-6"
										>
											By Category
										</Typography>
										<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-x-0 gap-y-6">
											<div>
												<div>
													{Object.values(
														radarMap,
													).map((category, index) => {
														return (
															<>
																<Typography
																	variant="h5"
																	className="mb-2"
																	color={
																		(category.correct /
																			category.total) *
																			100 <
																		50
																			? 'red'
																			: 'black'
																	}
																>
																	{
																		Object.keys(
																			radarMap,
																		)[index]
																	}{' '}
																	:{' '}
																	{
																		category.correct
																	}{' '}
																	/
																	{
																		category.total
																	}
																</Typography>
															</>
														);
													})}
												</div>
											</div>
											<div>
												<Radar
													data={radarData}
													options={radarOptions}
												/>
											</div>
										</div>
									</CardBody>
								</Card>
								<Typography
									variant="h3"
									color="black"
									className="my-5"
								>
									Recommendations
								</Typography>
								<Card className="my-5">
									<CardBody>
										{instances.length > 0 &&
											instances
												.reverse()
												.map((instance, index) => (
													<>
														<Typography
															variant="h4"
															color="black"
															className="mb-6"
														>
															Attempt #{index + 1}
														</Typography>
														<Typography
															variant="lead"
															color="black"
															className="mb-6 whitespace-pre-line"
														>
															{ReactHtmlParser(
																instance.recommendation_auto,
															)}
														</Typography>
													</>
												))}{' '}
										{instances.length > 0 && (
											<>
												<Typography
													variant="h4"
													color="black"
													className="mb-6"
												>
													Personal Recommendation
												</Typography>
												<Typography
													variant="lead"
													color="black"
													className="mb-6 whitespace-pre-line"
												>
													{
														instances[0]
															.recommendation
													}
												</Typography>
											</>
										)}
									</CardBody>
								</Card>
							</>
						)}
				</div>
			</div>
		</AppLayout>
	);
}
