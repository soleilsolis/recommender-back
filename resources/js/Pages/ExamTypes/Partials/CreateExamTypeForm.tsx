import { useForm } from '@inertiajs/react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import classNames from 'classnames';

export default function CreateExamTypeForm() {
	const route = useRoute();
	const page = useTypedPage();
	const form = useForm({
		name: '',
	});

	function createExamType() {
		form.post(route('examType.store'), {
			errorBag: 'createExamType',
			preserveScroll: true,
		});
	}

	return (
		<FormSection
			onSubmit={createExamType}
			title={'Exam Type Details'}
			description={
				'Create a new Exam Type'
			}
			renderActions={() => (
				<>
					<ActionMessage
						on={form.recentlySuccessful}
						className="mr-3"
					>
						Saved.
					</ActionMessage>

					<PrimaryButton
						className={classNames({
							'opacity-25': form.processing,
						})}
						disabled={form.processing}
					>
						Save
					</PrimaryButton>
				</>
			)}
		>
			<div className="col-span-6 sm:col-span-4">
				<InputLabel htmlFor="name" value="Exam Type Name" />
				<TextInput
					id="name"
					type="text"
					className="mt-1 block w-full"
					value={form.data.name}
					onChange={e => form.setData('name', e.currentTarget.value)}
					autoFocus
				/>
				<InputError message={form.errors.name} className="mt-2" />
			</div>
		</FormSection>
	);
}
