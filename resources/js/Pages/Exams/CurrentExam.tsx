import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import {
	Card,
	Breadcrumbs,
	Input,
	Typography,
	CardBody,
	IconButton,
	Textarea,
	SpeedDial,
	SpeedDialHandler,
	SpeedDialContent,
	SpeedDialAction,
	Select,
	Option,
	Checkbox,
	Button,
	CardHeader,
	CardFooter,
	Radio,
	DialogHeader,
	Dialog,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';
import AppLayout from '@/Layouts/AppLayout';

import {
	ClipboardDocumentListIcon,
	HomeIcon,
	PencilIcon,
	TrashIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useForm } from '@inertiajs/react';

interface Props {
	exam: any;
	question: any;
	instance: any;
	instanceAnswers: any;
}

export default function Show({
	exam,
	question,
	instance,
	instanceAnswers,
}: Props) {
	const route = useRoute();
	const page = useTypedPage();
	const [answer_id, setAnswerId] = useState();
	const [open, setOpen] = useState(false);
	const [x, xxx] = useState();

	const handleOpen = () => setOpen(!open);

	const form = useForm({
		answer_id,
		question_id: question.data[0].id,
		url: '',
		page: '',
		value: '',
		instance_answer_id:
			instanceAnswers[0] != undefined ? instanceAnswers[0].id : null,
	});

	const finishExam = () => {
		form.post(route('exam.finish'), {
			errorBag: 'finishExam',
			preserveScroll: true,
		});
	};

	useEffect(() => {
		form.data.value =
			instanceAnswers[0] != undefined ? instanceAnswers[0].value : null;
			
	}, []);

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
						<Link
							href={`/exam/student/${exam.id}`}
							className="opacity-60"
						>
							<span>{exam.id}</span>
						</Link>

						<span>Current</span>
					</Breadcrumbs>
					<Typography variant="h2" color="blue-gray">
						{exam.name} - ({exam.attempts} Attempts){' '}
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

					<br></br>
					<Button
						color="green"
						className="flex items-center gap-3"
						onClick={handleOpen}
					>
						Finish Exam
					</Button>
					<br></br>

					<Card>
						<CardBody>
							<div className="flex items-start justify-between mb-5">
								<Typography variant="h4" color="black">
									Question {question.current_page}
								</Typography>

								{instanceAnswers[0] != null ||
								instanceAnswers[0] != undefined ? (
									<Typography
										variant="h4"
										color="green"
										className="font-bold"
									>
										Answered
									</Typography>
								) : (
									<Typography
										variant="h4"
										color="gray"
										className="font-bold"
									>
										Unanswered
									</Typography>
								)}
							</div>
							<Typography
								variant="h3"
								color="black"
								className="mb-5"
							>
								{question.data[0].value}
							</Typography>

							<Card
								shadow={false}
								className="border-2 border-gray-500 p-2"
							>
								<CardBody>
									{question.data[0].answers.map(answer => (
										<>
											{question.data[0].type ===
												'Multiple Choice' && (
												<>
													<Radio
														key={answer.id}
														crossOrigin={undefined}
														name="instanceAnswer"
														defaultChecked={
															instanceAnswers[0] !=
															undefined
																? instanceAnswers[0]
																		.answer_id ==
																  answer.id
																: false
														}
														label={
															<Typography
																variant="lead"
																className="font-medium"
															>
																{answer.value}
															</Typography>
														}
														className="block"
														onChange={() => {
															form.data.answer_id =
																answer.id;

															form.data.question_id =
																answer.question.id;
															form.post(
																route(
																	'instanceAnswer.store',
																),
																{
																	errorBag:
																		'submitAnswer',
																	preserveScroll:
																		true,
																},
															);
														}}
													/>
													<br></br>
												</>
											)}
										</>
									))}

									{question.data[0].type === 'Written' && (
										<Textarea
											label="Answer"
											onChange={event => {
												form.data.value =
													event.currentTarget.value;
											}}
										>
											{form.data.value}
										</Textarea>
									)}
								</CardBody>
							</Card>
						</CardBody>
						<CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
							{question.prev_page_url ? (
								<Button
									variant="outlined"
									size="sm"
									onClick={() => {
										form.data.url = question.prev_page_url;
										form.post(
											route('instanceAnswer.store'),
											{
												errorBag: 'submitAnswer',
												preserveScroll: true,
											},
										);
									}}
								>
									Previous
								</Button>
							) : (
								<span></span>
							)}

							{question.next_page_url && (
								<Button
									variant="outlined"
									size="sm"
									onClick={() => {
										form.data.url = question.next_page_url;
										form.post(
											route('instanceAnswer.store'),
											{
												errorBag: 'submitAnswer',
												preserveScroll: true,
											},
										);
									}}
								>
									Next
								</Button>
							)}
						</CardFooter>
					</Card>
				</div>
			</div>

			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>Finish Exam</DialogHeader>
				<DialogBody>
					<Typography variant="h3" color="red">
						Are you sure? You cannot retake this exam if you
						exhausted all attempts!
					</Typography>
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						onClick={handleOpen}
						className="mr-1"
					>
						<span onClick={handleOpen}>Cancel</span>
					</Button>
					<Button variant="gradient" color="red" onClick={finishExam}>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</AppLayout>
	);
}
