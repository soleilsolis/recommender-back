import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/react';
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
} from '@material-tailwind/react';
import AppLayout from '@/Layouts/AppLayout';

import {
	ClipboardDocumentListIcon,
	HomeIcon,
	MagnifyingGlassIcon,
	PencilIcon,
	TrashIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import NavLink from '@/Components/NavLink';
import moment from 'moment';
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
		value: '',
		correct: 0,
		delete: false,
	};
	const blankQuestion = {
		id: null,
		value: '',
		category_id: categories[0].id,
		exam_id: exam.id,
		type: 'Multiple Choice',
		answers: [blankAnswer],
		delete: false,
	};

	const [questions, setQuestions] = useState(
		exam.questions.length === 0 ? blankQuestion : exam.questions,
	);

	const types = ['Multiple Choice', 'True or False', 'Written'];
	const [x, xxx] = useState(1);

	const form = useForm({
		questions,
        delete: new Array,
	});

	const createQuestion = () => {
		const res = form.post(route('question.store'), {
			errorBag: 'createQuestion',
			preserveScroll: true,
		});

		console.log(res);
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
						<a href="#">Breadcrumbs</a>
					</Breadcrumbs>
					<Typography variant="h2" color="blue-gray">
						{exam.name} - ({exam.attempts} Attempts)
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

					{questions.map(
						({ id, value, category_id, type, answers }, index) => (
							<div className="my-6 grid lg:grid-cols-5 grid-cols-1 md:gap-4 gap-y-4">
								<Card className="col-span-3">
									<CardBody>
										<div className="grid grid-cols-12 gap-5">
											<div className="col-span-12 flex items-center justify-between">
												<Typography variant="h5">
													#{index + 1}
												</Typography>
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
                                                        onClick={() => {
                                                            delete questions[index]
                                                            form.data.delete.push(index)
                                                            xxx(x+1)
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
													onLoad={() =>
														this.closest(
															'div',
														).classList.add(
															'h-full',
														)
													}
												>
													{value}
												</Textarea>
												<div className="mt-5">
													<Select
														label="Category"
														value={category_id}
														onChange={event =>
															(questions[index][
																'category'
															] = event)
														}
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
														onChange={event =>
															(questions[index][
																'type'
															] = event)
														}
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
										<table className="w-full mt-5 md:h-max mb-6 table-fixed border-separate border-spacing-y-2.5">
											<thead>
												<tr>
													<th className="w-[20%]">
														Correct
													</th>
													<th className="w-[60%]">
														Value
													</th>
													<th className="w-[20%]">
														Actions
													</th>
												</tr>
											</thead>
											<tbody>
												{answers.map(
													(answer, answerIndex) => (
														<tr>
															<td>
																<Checkbox
																	crossOrigin={
																		undefined
																	}
																	onChange={event => {
																		answer.correct =
																			!answer.correct;
																		event.currentTarget.checked =
																			answer.correct;
																	}}
																/>
															</td>
															<td>
																<Input
																	crossOrigin={
																		undefined
																	}
																	onChange={event => {
																		answer.value =
																			event.currentTarget.value;

																		console.log(
																			answer.value,
																		);
																	}}
																/>
															</td>
															<td>
																<IconButton
																	variant="text"
																	color="green"
																	className="rounded-full"
																	onClick={() => {
																		questions[
																			index
																		][
																			'answers'
																		].push({
																			id: null,
																			value: '',
																			correct: 0,
																			delete: false,
																		}),
																			xxx(
																				x +
																					1,
																			);
																	}}
																>
																	<PlusIcon className="w-5 h-5" />
																</IconButton>
																<IconButton
																	variant="text"
																	color="red"
																	className="rounded-full"
																	disabled={
																		answers.length ===
																		1
																	}
                                                                    
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
						<SpeedDialAction>
							<ClipboardDocumentListIcon
								className="h-5 w-5"
								onClick={createQuestion}
							/>
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
