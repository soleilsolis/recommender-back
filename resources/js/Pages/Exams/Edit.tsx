import EditExamForm from '@/Pages/Exams/Partials/EditExamForm';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';
import { ExamType } from '@/types';
import AddCategoriesForm from './Partials/AddCategoriesForm';

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
					<EditExamForm examTypes={examTypes} exam={exam} />
				</div>
        <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
					<AddCategoriesForm exam={exam} />
				</div>
			</div>
		</AppLayout>
	);
}
