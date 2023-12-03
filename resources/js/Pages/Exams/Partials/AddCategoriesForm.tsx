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
import {
	Input,
	Option,
	Select,
	Textarea,
	Typography,
} from '@material-tailwind/react';
import { ExamType } from '@/types';

interface Props {
	exam: any;
}

export default function AddCategoriesForm({ exam }: Props) {
	const route = useRoute();
	const page = useTypedPage();
	const form = useForm({
		exam_id: exam.id,
		name: '',
	});

	console.log(exam.categories);

	function addCategory() {
		form.post(route('category.store'), {
			errorBag: 'addCategory',
			preserveScroll: true,
		});
	}

	return (
		<FormSection
			onSubmit={addCategory}
			title={'Categories'}
			description={'Create Categories'}
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
				{exam.categories.map(category => (
					<Typography variant="lead">{category.name}</Typography>
				))}

				<div className="mt-2">
					<InputLabel htmlFor="name" value="Name" />

					<Input
						id="name"
						type="text"
						value={form.data.name}
						onChange={e =>
							form.setData('name', e.currentTarget.value)
						}
						autoFocus
						crossOrigin={undefined}
					/>
					<InputError message={form.errors.name} className="mt-2" />
				</div>
			</div>
		</FormSection>
	);
}
