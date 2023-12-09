import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import classNames from 'classnames';
import {
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Input,
	Option,
	Select,
	Textarea,
	Typography,
	Button,
} from '@material-tailwind/react';

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

	const deleteCategoryForm = useForm({
		id: null,
	});

	function deleteCategory() {
		deleteCategoryForm.delete(route('category.delete'), {
			errorBag: 'deleteCategory',
			preserveScroll: true,
		});
		setOpen(!open);
	}

	function addCategory() {
		form.post(route('category.store'), {
			errorBag: 'addCategory',
			preserveScroll: true,
		});

		form.data.name = null;
		
	}

	const [open, setOpen] = useState(false);

	const handleOpen = ($id = null) => {
		deleteCategoryForm.setData('id', $id);
		setOpen(!open);
	};

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
					<div className="flex items-center gap-2">
						<Typography variant="lead">{category.name}</Typography>
						<Typography
							variant="small"
							color="red"
							className='cursor-pointer'
							onClick={e => {
								deleteCategoryForm.data.id = category.id;
								handleOpen(category.id);
								console.log(deleteCategoryForm.data.id);
							}}
						>
							Delete
						</Typography>
					</div>
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

			<Dialog handler={handleOpen} open={open}>
				<DialogHeader>Delete Category</DialogHeader>

				<DialogBody>
					<Typography variant="h3" color="red">
						Are you sure? <br />
						<br />
						It will delete all the questions in this category as
						well!
					</Typography>
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="black"
						onClick={handleOpen}
						className="mr-1"
					>
						<span>Cancel</span>
					</Button>
					<Button
						variant="gradient"
						color="red"
						onClick={deleteCategory}
					>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</FormSection>
	);
}
