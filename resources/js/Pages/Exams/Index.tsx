import { Link } from '@inertiajs/react';
import React from 'react';
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
} from '@material-tailwind/react';
import AppLayout from '@/Layouts/AppLayout';
import { Exam } from '@/types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/solid';
import NavLink from '@/Components/NavLink';
import moment from 'moment';

interface Props {
	paginator: any;
}

export default function Exams({ paginator }: Props) {
	const route = useRoute();
	const page = useTypedPage();

	const TABLE_HEAD = ['Name', 'Type', 'Attempts', 'Dealine','Actions'];

	return (
		<AppLayout title="Exams">
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
						<Card className="h-full w-full">
							<CardHeader
								floated={false}
								shadow={false}
								className="rounded-none"
							>
								<div className="mb-8 flex items-center justify-between gap-8">
									<div>
										<Typography
											variant="h5"
											color="blue-gray"
										>
											Exams
										</Typography>
										<Typography
											color="gray"
											className="mt-1 font-normal"
										>
											See information about all exams
										</Typography>
									</div>
									<div className="flex shrink-0 flex-col gap-2 sm:flex-row">
										<Button variant="outlined" size="sm">
											view all
										</Button>
										<NavLink href={route('exam.create')}>
											<Button
												className="flex items-center gap-3"
												size="sm"
											>
												<PlusIcon
													strokeWidth={2}
													className="h-4 w-4"
												/>{' '}
												Add Exam
											</Button>
										</NavLink>
									</div>
								</div>
								<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
									<div className="w-full md:w-72">
										<Input
											label={'Search'}
											icon={
												<MagnifyingGlassIcon className="h-5 w-5" />
											}
											crossOrigin={undefined}
										/>
									</div>
								</div>
							</CardHeader>
							<CardBody className="overflow-scroll px-0">
								<table className="mt-4 w-full min-w-max table-auto text-left">
									<thead>
										<tr>
											{TABLE_HEAD.map(head => (
												<th
													key={head}
													className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
												>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal leading-none opacity-70"
													>
														{head}
													</Typography>
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{paginator.data.map(
											({ id, name, examType, attempts, expires_at }, index) => {
												const isLast =
													index ===
													paginator.data.length - 1;
												const classes = isLast
													? 'p-4'
													: 'p-4 border-b border-blue-gray-50';

												return (
													<tr key={name}>
														<td className={classes}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-bold"
															>
																{name}
															</Typography>
														</td>
														<td className={classes}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal"
															>
																{examType.name}
															</Typography>
														</td>
														<td className={classes}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal"
															>
																{attempts}
															</Typography>
														</td>
														<td className={classes}>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal"
															>
																{moment(expires_at).format('MMMM Do YYYY, h:mm:ss a')}
															</Typography>
														</td>
														<td className={classes}>
															<NavLink href={`/exam/${id}`}>
															<Tooltip content="Edit Exam">
																<IconButton variant="text">
																	<PencilIcon className="h-4 w-4" />
																</IconButton>
															</Tooltip>
															</NavLink>
														</td>
													</tr>
												);
											},
										)}
									</tbody>
								</table>
							</CardBody>
							<CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal"
								>
									Page {paginator.current_page} of{' '}
									{paginator.last_page}
								</Typography>
								{paginator.total > 1 && (
									<div className="flex gap-2">
										{paginator.current_page > 1 && (
											<NavLink
												href={`?page=${
													paginator.current_page - 1
												}`}
											>
												<Button
													variant="outlined"
													size="sm"
												>
													Previous
												</Button>
											</NavLink>
										)}

										{paginator.last_page >
											paginator.current_page && (
											<NavLink
												href={`?page=${
													paginator.current_page + 1
												}`}
											>
												<Button
													variant="outlined"
													size="sm"
												>
													Next
												</Button>
											</NavLink>
										)}
									</div>
								)}
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}
