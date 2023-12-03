import EditExamForm from '@/Pages/Exams/Partials/EditExamForm';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';
import { ExamType } from '@/types';
import AddCategoriesForm from './Partials/AddCategoriesForm';
import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from '@inertiajs/react';
import { HomeIcon } from '@heroicons/react/24/outline';
interface Props {
	examTypes: ExamType[];
	exam: any;
}

export default function Edit({ examTypes, exam }: Props) {
	return (
		<AppLayout
			title="Edit Exam"
			renderHeader={() => (
				<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
					Edit Exam Details
				</h2>
			)}
		>
			<div>
				<div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <Breadcrumbs className='mb-5'>
						<Link href="/dashboard" className="opacity-60">
							<HomeIcon className="h-4 w-4" />
						</Link>
						<Link href="/exams" className="opacity-60">
							<span>Exams</span>
						</Link>
                        <Link href="/exam/79" className='opacity-60'>
							<span>{exam.id}</span>
						</Link>
            <Link href="#" >
							Edit
						</Link>
					</Breadcrumbs>
					<EditExamForm examTypes={examTypes} exam={exam} />
				</div>
				<div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
					<AddCategoriesForm exam={exam} />
				</div>
			</div>
		</AppLayout>
	);
}
