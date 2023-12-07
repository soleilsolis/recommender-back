import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
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
	Radio,
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
}

export default function Show({ exam }: Props) {
	const route = useRoute();
	const page = useTypedPage();
	const [categories, setCategories] = useState(exam.categories);
	const blankAnswer = {
		id: null,
		value: 'Correct Answer',
		correct: 1,
	};
	const blankAnswerIncorrect = {
		id: null,
		value: 'Correct Answer',
		correct: 0,
	};

	const blankQuestion = {
		id: null,
		value: '',
		category_id: categories.length > 0 ? categories[0].id : null,
		exam_id: exam.id,
		type: 'Multiple Choice',
		answers: [blankAnswer],
	};

	const [questions, setQuestions] = useState(
		exam.questions.length === 0 ? [blankQuestion] : exam.questions,
	);

	const types = ['Multiple Choice', 'True or False', 'Written'];
	const [x, xxx] = useState(1);

	const form = useForm({
		questions,
		deleteQuestions: new Array(),
		deleteAnswers: new Array(),
		exam_id: exam.id,
	});

	const createQuestion = () => {
		const res = form.post(route('question.store'), {
			errorBag: 'createQuestion',
			preserveScroll: true,
		});
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
					<Typography variant="h2" color="blue-gray">
						{exam.name} - ({exam.attempts} Attempts){' '}
						<Link href={`/exam/edit/${exam.id}`}>
							<Button size="sm">Edit</Button>
						</Link>
						<Link
							href={route('instances.index', {
								exam_id: exam.id,
							})}
						>
							<Button size="sm">View Submissions</Button>
						</Link>
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
					<Typography variant="h4" color="blue-gray">
						Questions
					</Typography>

					{categories.length > 0 ? (
						questions.map(
							(
								{
									id,
									value,
									category_id,
									type,
									worth,
									answers,
								},
								index,
							) => (
								<div className="my-6 grid lg:grid-cols-5 grid-cols-1 md:gap-4 gap-y-4">
									<Card className="col-span-3">
										<CardBody>
											<div className="grid grid-cols-12 gap-5">
												<div className="col-span-12 flex items-center justify-between">
													<div>
														<IconButton
															variant="text"
															color="green"
															className="rounded-full"
															onClick={() => {
																questions.push(
																	blankQuestion,
																),
																	xxx(x + 1);
															}}
														>
															<PlusIcon className="w-5 h-5" />
														</IconButton>
														<IconButton
															variant="text"
															color="red"
															className="rounded-full"
															disabled={
																questions.length ===
																1
															}
															onClick={event => {
																delete questions[
																	index
																];

																form.data.deleteQuestions.push(
																	id,
																);

																xxx(x + 1);
															}}
														>
															<TrashIcon className="w-5 h-5" />
														</IconButton>
													</div>
												</div>
												<div className="col-span-12">
													<Textarea
														className="h-full"
														label="Question"
														onChange={event =>
															(questions[index][
																'value'
															] =
																event.currentTarget.value)
														}
													>
														{value}
													</Textarea>

													<div className="mt-5">
														<Input
															label="Worth (Points)"
															value={worth}
															onInput={e => {
																let text =
																	e.currentTarget.value.match(
																		/^[0-9]{0,4}/g,
																	);

																questions[
																	index
																]['worth'] =
																	text[0];
																xxx(x + 1);
															}}
														/>
													</div>
													<div className="mt-5">
														<Select
															label="Subject"
															value={category_id}
															onChange={event => {
																questions[
																	index
																][
																	'category_id'
																] = event;

																xxx(x + 1);
															}}
														>
															{categories.map(
																category => (
																	<Option
																		value={
																			category.id
																		}
																	>
																		{
																			category.name
																		}
																	</Option>
																),
															)}
														</Select>
													</div>

													<div className="mt-5">
														<Select
															label="Answer Type"
															value={type}
															onChange={event => {
																questions[
																	index
																]['type'] =
																	event;

																xxx(x + 1);
															}}
														>
															{types.map(type => (
																<Option
																	value={type}
																>
																	{type}
																</Option>
															))}
														</Select>
													</div>
												</div>

												<div className="md:col-span-3 col-span-12"></div>
											</div>
										</CardBody>
									</Card>

									<Card className="col-span-2 p-0 overflow-y-scroll">
										<CardBody className="h-[300px] ">
											<table className="w-full md:h-max mb-6 table-fixed border-separate border-spacing-y-2.5">
												<thead>
													<tr>
														<th className="w-[20%]">
															Correct
														</th>
														<th className="w-[60%]">
															Value
														</th>
														<th className="w-[20%]">
															<IconButton
																variant="text"
																color="green"
																className="rounded-full"
																onClick={() => {
																	questions[
																		index
																	][
																		'answers'
																	].push(
																		blankAnswerIncorrect,
																	),
																		xxx(
																			x +
																				1,
																		);
																}}
															>
																<PlusIcon className="w-5 h-5" />
															</IconButton>
														</th>
													</tr>
												</thead>
												<tbody>
													{answers.map(
														(
															answer,
															answerIndex,
														) => (
															<tr>
																<td>
																	<Radio
																		crossOrigin={
																			undefined
																		}
																		name={
																			'question' +
																			index
																		}
																		defaultChecked={
																			answer.correct ===
																			1
																				? true
																				: false
																		}
																		onChange={event => {
																			answer.correct =
																				!answer.correct;
																		}}
																	/>
																</td>
																<td>
																	<Input
																		crossOrigin={
																			undefined
																		}
																		defaultValue={
																			answer.value
																		}
																		onChange={event => {
																			answer.value =
																				event.currentTarget.value;
																		}}
																	/>
																</td>
																<td className="flex items-center justify-center">
																	<IconButton
																		variant="text"
																		color="red"
																		className="rounded-full mx-auto"
																		disabled={
																			answers.length ===
																			1
																		}
																		onClick={() => {
																			delete answers[
																				answerIndex
																			];
																			xxx(
																				x +
																					1,
																			);
																		}}
																	>
																		<TrashIcon className="w-5 h-5" />
																	</IconButton>
																</td>
															</tr>
														),
													)}
												</tbody>
											</table>
										</CardBody>
									</Card>
								</div>
							),
						)
					) : (
						<Typography variant="lead" className="mt-2">
							To add Questions, go to the{' '}
							<Link
								className="text-blue-500"
								href={`/exam/edit/${exam.id}#categories`}
							>
								{' '}
								Edit
							</Link>{' '}
							page to add <b>Categories</b>
						</Typography>
					)}
				</div>
			</div>

			<div className="fixed bottom-10 right-10">
				<SpeedDial>
					<SpeedDialHandler>
						<IconButton size="lg" className="rounded-full">
							<PencilIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
						</IconButton>
					</SpeedDialHandler>
					<SpeedDialContent>
						<SpeedDialAction onClick={createQuestion}>
							<ClipboardDocumentListIcon className="h-5 w-5" />
						</SpeedDialAction>
						<SpeedDialAction>
							<XMarkIcon className="h-5 w-5" />
						</SpeedDialAction>
					</SpeedDialContent>
				</SpeedDial>
			</div>
		</AppLayout>
	);
}
