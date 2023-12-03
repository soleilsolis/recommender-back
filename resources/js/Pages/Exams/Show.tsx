import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/react';
import {
	Card,
	CardHeader,
	Input,
	Typography,
	Button,
	CardBody,
	Chip,
	CardFooter,
	Tabs,
	TabsHeader,
	Tab,
	Avatar,
	IconButton,
	Tooltip,
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
import { Exam } from '@/types';
import { ClipboardDocumentListIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
	PlusIcon,
	HomeIcon,
	CogIcon,
	Square3Stack3DIcon,
} from '@heroicons/react/24/solid';
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
	const [questions, setQuestions] = useState(
		exam.questions ?? [
			{
				id: null,
				value: '',
				category_id: null,
				exam_id: exam.id,
				type: 'Multiple Choice',
				answers: [
					{
						id: null,
						value: '',
						correct: 0,
						delete: false,
					},
				],
				delete: false,
			},
		],
	);

	console.log(questions);

	const types = ['Multiple Choice', 'True or False', 'Written'];
	const [x, xxx] = useState(1);

	const form = useForm({
		questions,
		categories: exam.categories,
	});

	return (
		<AppLayout title={`${exam.name}`}>
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<Typography variant="h2" color="blue-gray">
						{exam.name} - {exam.team.name}
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
						{exam.team.owner.name}
					</Typography>
					<p>{exam.attempts} Attempts</p>
					<br></br>
					<Typography variant="h4" color="blue-gray">
						Questions
					</Typography>

					{questions.map(
						({ id, value, category_id, type, answers }, index) => (
							<Card className="my-3">
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
														questions.push({
															id: null,
															value: null,
															category_id: null,
															exam_id: exam.id,
															type: 1,
														}),
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
														questions.length === 1
													}
												>
													<TrashIcon className="w-5 h-5" />
												</IconButton>
											</div>
										</div>
										<div className="md:col-span-6 col-span-12">
											<Textarea
												className="h-full"
												label="Question"
												onChange={event =>
													(questions[index]['value'] =
														event.currentTarget.value)
												}
												onLoad={() =>
													this.closest(
														'div',
													).classList.add('h-full')
												}
											>
												{value}
											</Textarea>
										</div>

										<div className="md:col-span-6 col-span-12">
											<Typography
												variant="h5"
												className="mb-5"
											>
												Category
											</Typography>
											<Select
												label="Category"
												onChange={event =>
													(questions[index][
														'category'
													] = event)
												}
											>
												{categories.map(category => (
													<Option value={category.id}>
														{category.name}
													</Option>
												))}
											</Select>
											<Typography
												variant="h5"
												className="my-5"
											>
												Answers
											</Typography>
											<Select
												label="Answer Type"
												onChange={event =>
													(questions[index]['type'] =
														event)
												}
											>
												{types.map(type => (
													<Option value={type}>
														{type}
													</Option>
												))}
											</Select>

											<table className="w-full mt-5">
												<thead>
													<tr>
														<th className="w-[10%]">
															Correct
														</th>
														<th className="w-[70%]">
															Value
														</th>
														<th className="w-[30%]">
															Actions
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
																<td className="flex justify-center items-center">
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
																<td className="flex justify-center items-center">
																	<IconButton
																		variant="text"
																		color="green"
																		className="rounded-full"
																		onClick={() => {
																			answers.push(
																				{
																					id: null,
																					value: '',
																					correct: 0,
																					delete: false,
																				},
																			),
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
										</div>
									</div>
								</CardBody>
							</Card>
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
