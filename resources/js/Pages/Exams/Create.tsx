import CreateExamForm from '@/Pages/Exams/Partials/CreateExamForm';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';
import { ExamType } from '@/types';

interface Props {
	examTypes: ExamType[];
}

export default function Create({ examTypes }: Props) {
  return (
    <AppLayout
      title="Create Exam"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Create Exam Type
        </h2>
      )}
    >
      <div>
        <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
          <CreateExamForm examTypes={examTypes} />
        </div>
      </div>
    </AppLayout>
  );
}
