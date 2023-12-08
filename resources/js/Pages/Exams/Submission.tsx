import { Link, useForm } from '@inertiajs/react';
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
	Textarea,
	Radio,
} from '@material-tailwind/react';
import AppLayout from '@/Layouts/AppLayout';

import { HomeIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';

interface Props {
	exam: any;
	score: any;
	categoryGroup: any;
	total: any;
	radarMap: any;
	user: any;
	instanceAnswers: any;
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

export default function ShowStudent({
	exam,
	score,
	total,
	radarMap,
	user,
	instanceAnswers,
}: Props) {
	const route = useRoute();
	const page = useTypedPage();
	const form = useForm({
		recommendation: '',
		user_id: user.id,
		exam_id: exam.id,
	});

	const correctorForm = useForm({
		instanceAnswers
	})

	const submitRecommendation = () => {
		const res = form.post(route('instance.recommendation.store'), {
			errorBag: 'submitRecommendation',
			preserveScroll: true,
		});
	};

	const saveWrittenAnswers = () => {
		const res = correctorForm.post(route('instanceAnswers.correct'), {
			errorBag: 'saveWrittenAnswers',
			preserveScroll: true,
		});
	};

	const radarData = {
		labels: Object.keys(radarMap).map(category => category),
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
					display: false,
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
						<Link href="/exams" className="opacity-60">
							<span>Exams</span>
						</Link>

						<Link href={`/exam/${exam.id}`} className="opacity-60">
							<span>{exam.id}</span>
						</Link>
					</Breadcrumbs>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-5 md:gap-4 mt-6">
						<div>
							<Typography variant="h2" color="blue-gray">
								{user.name}'s {exam.name}
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
					</div>

					<Typography variant="h3" className="my-5 ">
						Stats
					</Typography>

					<Card>
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
										{Object.values(radarMap).map(
											(category, index) => {
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
															: {category.correct}{' '}
															/{category.total}
														</Typography>
													</>
												);
											},
										)}
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
					<Card className="my-5">
						<CardBody>
							{instanceAnswers.map(
								(instanceAnswer, index) =>
									instanceAnswer.question.type ===
										'Written' && (
										<>
											<Typography
												variant="h4"
												color="black"
											>
												Question {index + 1}
											</Typography>
											<Typography
												variant="lead"
												color="black"
											>
												{instanceAnswer.question.value}
											</Typography>
											<Typography
												variant="lead"
												color="black"
											>
												Answer : {instanceAnswer.value}
											</Typography>

											<Radio
												label="Correct"
												name={`question${index + 1}`}
												defaultChecked={
													instanceAnswer.correct
												}
												onChange={event => {
													{instanceAnswer.correct = 1;
													console.log(instanceAnswer.correct)}
												}}
											/>

											<Radio
												label="Incorrect"
												name={`question${index + 1}`}
												defaultChecked={
													instanceAnswer.correct === 0
												}
												onChange={event => {
													{instanceAnswer.correct = 0;
													console.log(instanceAnswer.correct)}
												}}
											/>
										</>
									),
							)}
							<Button className='block mt-5' onClick={saveWrittenAnswers}>Save</Button>
						</CardBody>
					</Card>
					<Card className="my-5">
						<CardBody>
							<Typography
								variant="h4"
								color="black"
								className="mb-6"
							>
								Recommendations
							</Typography>

							<div className="my-5">
								<Textarea
									label="Recommendations"
									onChange={event =>
										(form.data.recommendation =
											event.currentTarget.value)
									}
								></Textarea>
							</div>

							<Button onClick={submitRecommendation}>Save</Button>
						</CardBody>
					</Card>
				</div>
			</div>
		</AppLayout>
	);
}
