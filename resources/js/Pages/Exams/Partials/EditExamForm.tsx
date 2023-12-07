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
import { Input, Option, Select, Textarea } from '@material-tailwind/react';
import { ExamType } from '@/types';
import moment from 'moment';
interface Props {
	examTypes: ExamType[];
	exam: any;
}

export default function EditExamForm({ examTypes, exam }: Props) {
	const route = useRoute();
	const page = useTypedPage();
	const form = useForm({
		id: exam.id,
		name: exam.name,
		exam_type_id: exam.exam_type_id,
		description: exam.description,
		date: moment(exam.expires_at).format('YYYY-MM-DD'),
		time: moment(exam.expires_at).format('HH:mm'),
		attempts: exam.attempts,
	});

	function editExam() {
		form.put(route('exam.update', { id: exam.id }), {
			errorBag: 'editExam',
			preserveScroll: true,
		});
	}

	return (
		<FormSection
			onSubmit={editExam}
			title={'Exam Details'}
			description={'Edit Exam'}
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
				<InputLabel htmlFor="name" value="Name" />

				<Input
					id="name"
					type="text"
					value={form.data.name}
					onChange={e => form.setData('name', e.currentTarget.value)}
					autoFocus
					crossOrigin={undefined}
				/>
				<InputError message={form.errors.name} className="mt-2" />
			</div>
			<div className="col-span-6 sm:col-span-4 mt-2">
				<InputLabel htmlFor="exam_type_id" value="Exam Type" />
				<Select
					id="exam_type_id"
					value={exam.exam_type_id}
					onChange={e => form.setData('exam_type_id', e)}
				>
					{examTypes.map(({ id, name }) => (
						<Option key={id} value={id}>
							{name}
						</Option>
					))}
				</Select>
				<InputError
					message={form.errors.exam_type_id}
					className="mt-2"
				/>
			</div>

			<div className="col-span-6 sm:col-span-4">
				<InputLabel htmlFor="date" value="Number of Attempts" />

				<Input
					id="attempts"
					type="text"
					value={form.data.attempts}
					onChange={e =>
						form.setData('attempts', e.currentTarget.value)
					}
					crossOrigin={undefined}
					onInput={e => {
						let text = e.currentTarget.value.match(/^[0-9]{1,10}/g);

						form.setData('attempts', text[0]);
						e.currentTarget.value = text[0];
					}}
				/>
				<InputError message={form.errors.attempts} className="mt-2" />
			</div>

			<div className="col-span-6 sm:col-span-4">
				<InputLabel htmlFor="description" value="Description" />

				<Textarea
					id="description"
					value={form.data.description}
					onChange={e =>
						form.setData('description', e.currentTarget.value)
					}
				/>
				<InputError
					message={form.errors.description}
					className="mt-2"
				/>
			</div>

			<div className="col-span-6 sm:col-span-4">
				<InputLabel htmlFor="date" value="Date (Deadline)" />

				<Input
					id="date"
					type="date"
					defaultValue={form.data.date}
					onChange={e => form.setData('date', e.currentTarget.value)}
					autoFocus
					crossOrigin={undefined}
				/>
				<InputError message={form.errors.date} className="mt-2" />
			</div>

			<div className="col-span-6 sm:col-span-4">
				<InputLabel htmlFor="date" value="Time (Deadline)" />

				<Input
					id="time"
					type="time"
					value={form.data.time}
					onChange={e => form.setData('time', e.currentTarget.value)}
					autoFocus
					crossOrigin={undefined}
				/>
				<InputError message={form.errors.time} className="mt-2" />
			</div>
		</FormSection>
	);
}
