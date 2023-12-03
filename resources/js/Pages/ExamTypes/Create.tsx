import CreateExamTypeForm from '@/Pages/ExamTypes/Partials/CreateExamTypeForm';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';

export default function Create() {
  return (
    <AppLayout
      title="Create Exam Type"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Create Exam Type
        </h2>
      )}
    >
      <div>
        <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
          <CreateExamTypeForm />
        </div>
      </div>
    </AppLayout>
  );
}
