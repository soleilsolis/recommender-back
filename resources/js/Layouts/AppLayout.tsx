import { router } from '@inertiajs/core';
import { Link, Head, useForm } from '@inertiajs/react';
import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import ApplicationMark from '@/Components/ApplicationMark';
import Banner from '@/Components/Banner';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Team } from '@/types';
import { Card, CardBody, Spinner, Typography } from '@material-tailwind/react';
import moment from 'moment';

interface Props {
	title: string;
	renderHeader?(): JSX.Element;
}

export default function AppLayout({
	title,
	renderHeader,
	children,
}: PropsWithChildren<Props>) {
	const page = useTypedPage();

	const route = useRoute();
	const [showingNavigationDropdown, setShowingNavigationDropdown] =
		useState(false);

	function switchToTeam(e: React.FormEvent, team: Team) {
		e.preventDefault();
		router.put(
			route('current-team.update'),
			{
				team_id: team.id,
			},
			{
				preserveState: false,
			},
		);
	}

	function logout(e: React.FormEvent) {
		e.preventDefault();
		router.post(route('logout'));
	}

	const navLinks = [
		{
			name: 'dashboard',
			label: 'Dashboard',
			type: ['admin'],
		},
		{
			name: 'dashboard',
			label: 'Dashboard',
			type: ['student'],
		},
		{
			name: 'exams.index',
			label: 'Exams',
			type: ['admin'],
		},
		{
			name: 'exams.index.student',
			label: 'Exams',
			type: ['student'],
		},
	];

	const [timer, setTimer] = useState('');

	if (page.props.auth.user?.current_instance != null) {
		if (
			page.props.auth.user?.current_instance.exam.limit != null &&
			page.props.auth.user?.current_instance.exam.limit > 0
		) {
			const form = useForm({
				current_instance_id: page.props.auth.user?.current_instance.id,
			});

			var countDownDate = moment(
				page.props.auth.user?.current_instance.created_at,
			)
				.add(page.props.auth.user?.current_instance.exam.limit, 'm')
				.toDate();
			// Update the count down every 1 second
			var x = setInterval(function () {
				// Get today's date and time
				var now = new Date().getTime();

				// Find the distance between now and the count down date
				var distance = countDownDate - now;

				// Time calculations for days, hours, minutes and seconds
				var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				var hours = Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
				);
				var minutes = Math.floor(
					(distance % (1000 * 60 * 60)) / (1000 * 60),
				);
				var seconds = Math.floor((distance % (1000 * 60)) / 1000);

				// Display the result in the element with id="demo"
				setTimer(minutes + 'm ' + seconds + 's ');

				// If the count down is finished, write some text
				if (distance < 0) {
					clearInterval(x);
					setTimer('Expired');

					form.post(route('exam.finish'));
				}
			}, 1000);
		}
	}

	return (
		<div>
			<Head title={title} />

			<Banner />

			<div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
				<nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
					{/* <!-- Primary Navigation Menu --> */}
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex">
								{/* <!-- Logo --> */}
								<div className="flex-shrink-0 flex items-center">
									<Link href={route('dashboard')}>
										<ApplicationMark className="block h-9 w-auto" />
									</Link>
								</div>

								{/* <!-- Navigation Links --> */}
								<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
									{navLinks
										.filter(item => {
											return (
												item.type.find(
													element =>
														element ==
														page.props.auth.user
															.type,
												) !== undefined
											);
										})
										.map(({ name, label }) => (
											<NavLink
												href={route(name)}
												active={route().current(name)}
											>
												{label}
											</NavLink>
										))}
								</div>
							</div>

							<div className="hidden sm:flex sm:items-center sm:ml-6">
								<div className="ml-3 relative">
									{/* <!-- Teams Dropdown --> */}
									{page.props.jetstream.hasTeamFeatures ? (
										<Dropdown
											align="right"
											width="60"
											renderTrigger={() => (
												<span className="inline-flex rounded-md">
													<button
														type="button"
														className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
													>
														{
															page.props.auth.user
																?.current_team
																?.name
														}

														<svg
															className="ml-2 -mr-0.5 h-4 w-4"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																fillRule="evenodd"
																d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
																clipRule="evenodd"
															/>
														</svg>
													</button>
												</span>
											)}
										>
											<div className="w-60">
												{/* <!-- Team Management --> */}
												{page.props.jetstream
													.hasTeamFeatures ? (
													<>
														{page.props.auth.user
															?.type ===
															'admin' && (
															<>
																<div className="block px-4 py-2 text-xs text-gray-400">
																	Manage
																	Classrooms
																</div>

																{/* <!-- Classroom Settings --> */}
																<DropdownLink
																	href={route(
																		'teams.show',
																		[
																			page
																				.props
																				.auth
																				.user
																				?.current_team!,
																		],
																	)}
																>
																	Classroom
																	Settings
																</DropdownLink>

																{page.props
																	.jetstream
																	.canCreateTeams ? (
																	<DropdownLink
																		href={route(
																			'teams.create',
																		)}
																	>
																		Create
																		New
																		Classroom
																	</DropdownLink>
																) : null}

																<div className="border-t border-gray-200 dark:border-gray-600" />
															</>
														)}

														{/* <!-- Team Switcher --> */}
														<div className="block px-4 py-2 text-xs text-gray-400">
															Switch Classrooms
														</div>

														{page.props.auth.user?.all_teams?.map(
															team => (
																<form
																	onSubmit={e =>
																		switchToTeam(
																			e,
																			team,
																		)
																	}
																	key={
																		team.id
																	}
																>
																	<DropdownLink as="button">
																		<div className="flex items-center">
																			{team.id ==
																				page
																					.props
																					.auth
																					.user
																					?.current_team_id && (
																				<svg
																					className="mr-2 h-5 w-5 text-green-400"
																					fill="none"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																					strokeWidth="2"
																					stroke="currentColor"
																					viewBox="0 0 24 24"
																				>
																					<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
																				</svg>
																			)}
																			<div>
																				{
																					team.name
																				}
																			</div>
																		</div>
																	</DropdownLink>
																</form>
															),
														)}
													</>
												) : null}
											</div>
										</Dropdown>
									) : null}
								</div>

								{/* <!-- Settings Dropdown --> */}
								<div className="ml-3 relative">
									<Dropdown
										align="right"
										width="48"
										renderTrigger={() =>
											page.props.jetstream
												.managesProfilePhotos ? (
												<button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
													<img
														className="h-8 w-8 rounded-full object-cover"
														src={
															page.props.auth.user
																?.profile_photo_url
														}
														alt={
															page.props.auth.user
																?.name
														}
													/>
												</button>
											) : (
												<span className="inline-flex rounded-md">
													<button
														type="button"
														className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
													>
														{
															page.props.auth.user
																?.name
														}

														<svg
															className="ml-2 -mr-0.5 h-4 w-4"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M19.5 8.25l-7.5 7.5-7.5-7.5"
															/>
														</svg>
													</button>
												</span>
											)
										}
									>
										{/* <!-- Account Management --> */}
										<div className="block px-4 py-2 text-xs text-gray-400">
											Manage Account
										</div>

										<DropdownLink
											href={route('profile.show')}
										>
											Profile
										</DropdownLink>

										{page.props.jetstream.hasApiFeatures ? (
											<DropdownLink
												href={route('api-tokens.index')}
											>
												API Tokens
											</DropdownLink>
										) : null}

										<div className="border-t border-gray-200 dark:border-gray-600"></div>

										{/* <!-- Authentication --> */}
										<form onSubmit={logout}>
											<DropdownLink as="button">
												Log Out
											</DropdownLink>
										</form>
									</Dropdown>
								</div>
							</div>

							{/* <!-- Hamburger --> */}
							<div className="-mr-2 flex items-center sm:hidden">
								<button
									onClick={() =>
										setShowingNavigationDropdown(
											!showingNavigationDropdown,
										)
									}
									className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
								>
									<svg
										className="h-6 w-6"
										stroke="currentColor"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											className={classNames({
												hidden: showingNavigationDropdown,
												'inline-flex':
													!showingNavigationDropdown,
											})}
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
										<path
											className={classNames({
												hidden: !showingNavigationDropdown,
												'inline-flex':
													showingNavigationDropdown,
											})}
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* <!-- Responsive Navigation Menu --> */}
					<div
						className={classNames('sm:hidden', {
							block: showingNavigationDropdown,
							hidden: !showingNavigationDropdown,
						})}
					>
						<div className="pt-2 pb-3 space-y-1">
							<ResponsiveNavLink
								href={route('dashboard')}
								active={route().current('dashboard')}
							>
								Dashboard
							</ResponsiveNavLink>
						</div>

						{/* <!-- Responsive Settings Options --> */}
						<div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
							<div className="flex items-center px-4">
								{page.props.jetstream.managesProfilePhotos ? (
									<div className="flex-shrink-0 mr-3">
										<img
											className="h-10 w-10 rounded-full object-cover"
											src={
												page.props.auth.user
													?.profile_photo_url
											}
											alt={page.props.auth.user?.name}
										/>
									</div>
								) : null}

								<div>
									<div className="font-medium text-base text-gray-800 dark:text-gray-200">
										{page.props.auth.user?.name}
									</div>
									<div className="font-medium text-sm text-gray-500">
										{page.props.auth.user?.email}
									</div>
								</div>
							</div>

							<div className="mt-3 space-y-1">
								<ResponsiveNavLink
									href={route('profile.show')}
									active={route().current('profile.show')}
								>
									Profile
								</ResponsiveNavLink>

								{page.props.jetstream.hasApiFeatures ? (
									<ResponsiveNavLink
										href={route('api-tokens.index')}
										active={route().current(
											'api-tokens.index',
										)}
									>
										API Tokens
									</ResponsiveNavLink>
								) : null}

								{/* <!-- Authentication --> */}
								<form method="POST" onSubmit={logout}>
									<ResponsiveNavLink as="button">
										Log Out
									</ResponsiveNavLink>
								</form>

								{/* <!-- Team Management --> */}
								{page.props.jetstream.hasTeamFeatures ? (
									<>
										<div className="border-t border-gray-200 dark:border-gray-600"></div>

										<div className="block px-4 py-2 text-xs text-gray-400">
											Manage Classrooms
										</div>

										{/* <!-- Classroom Settings --> */}
										<ResponsiveNavLink
											href={route('teams.show', [
												page.props.auth.user
													?.current_team!,
											])}
											active={route().current(
												'teams.show',
											)}
										>
											Classroom Settings
										</ResponsiveNavLink>

										{page.props.jetstream.canCreateTeams ? (
											<ResponsiveNavLink
												href={route('teams.create')}
												active={route().current(
													'teams.create',
												)}
											>
												Create New Classroom
											</ResponsiveNavLink>
										) : null}

										<div className="border-t border-gray-200 dark:border-gray-600"></div>

										{/* <!-- Team Switcher --> */}
										<div className="block px-4 py-2 text-xs text-gray-400">
											Switch Classrooms
										</div>
										{page.props.auth.user?.all_teams?.map(
											team => (
												<form
													onSubmit={e =>
														switchToTeam(e, team)
													}
													key={team.id}
												>
													<ResponsiveNavLink as="button">
														<div className="flex items-center">
															{team.id ==
																page.props.auth
																	.user
																	?.current_team_id && (
																<svg
																	className="mr-2 h-5 w-5 text-green-400"
																	fill="none"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="2"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																>
																	<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
																</svg>
															)}
															<div>
																{team.name}
															</div>
														</div>
													</ResponsiveNavLink>
												</form>
											),
										)}
									</>
								) : null}
							</div>
						</div>
					</div>
				</nav>

				{/* <!-- Page Heading --> */}
				{renderHeader ? (
					<header>
						<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
							{renderHeader()}
						</div>
					</header>
				) : null}

				{/* <!-- Page Content --> */}
				<main className="md:mx-0 mx-4 relative min-h-full">
					{children}

					
				</main>
				{page.props.auth.user?.current_instance && (
						<div className="fixed top-5 right-5">
							<Link href={route('exam.current', { page: 1 })}>
								<Card className=" max-w-[300px] w-[300px]">
									<CardBody className="p-4 flex items-center gap-4">
										<Spinner />
										<div>
											<Typography
												variant="small"
												className="flex items-center gap-3"
											>
												You are currently taking:
											</Typography>
											<Typography variant="h6">
												{
													page.props.auth.user
														?.current_instance.exam
														.name
												}
											</Typography>

											{page.props.auth.user
												?.current_instance.exam
												.limit !== null &&
												page.props.auth.user
													?.current_instance.exam
													.limit > 0 && (
													<Typography variant="h5">
														{timer} Left
													</Typography>
												)}
										</div>
									</CardBody>
								</Card>
							</Link>
						</div>
					)}
			</div>
		</div>
	);
}
