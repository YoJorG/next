'use client'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/src/utils/sendEmail'
export type FormData = {
	email: string
	username: string
	message: string
}
function ContactForm() {
	const { register, handleSubmit } = useForm<FormData>()

	async function onSubmit(data: FormData) {
		await sendEmail(data)
	}
	return (
		<section className='bg-slate-100 pb-8' id='kontakt'>
			<div className='container py-8 mx-auto flex flex-col items-center px-1 md:px-4'>
				<h2 className='text-blue-600 font-bold text-2xl mb-8 before:w-full before:h-1 before:left-0 before:-bottom-0 before:border-b-2 before:border-blue-400 before:absolute relative before:bg-blue-600 my-8 '>
					Kontakt
				</h2>
				<form
					className='flex flex-col px-2 md:px-8  bg-blue-700 rounded-md max-w-2xl border-2 border-blue-800 w-full shadow-md '
					onSubmit={handleSubmit(onSubmit)}
				>
					<p className='text-2xl font-bold mx-auto my-4 underline text-center text-white'>Napisz do nas</p>
					<label htmlFor='email' className='text-white'>
						Email:
					</label>
					<input
						type='email'
						id='email'
						className='border-2 border-blue-800 py-2 rounded-md mb-2 px-1 shadow-md'
						{...register('email', { required: true })}
					/>
					<label htmlFor='username' className='text-white'>
						Imię:
					</label>
					<input
						type='text'
						id='username'
						className='border-2 border-blue-800  py-2 rounded-md mb-2 px-1 shadow-md'
						{...register('username', { required: true })}
					/>
					<label htmlFor='textarea' className='text-white rounded-md '>
						Wiadomość:
					</label>
					<textarea
						id='textarea'
						maxLength={512}
						className='border-2 border-blue-800 h-48 resize-none rounded-md px-1 shadow-md'
						{...register('message', { required: true })}
					></textarea>
					<button
						type='submit'
						className='mb-10 bg-white py-2 px-4 mt-4 border-2 border-blue-800 rounded-md text-blue-800 font-bold text-lg shadow-md hover:shadow-none hover:bg-blue-800 hover:border-white hover:text-white'
					>
						Wyślij
					</button>
				</form>
			</div>
		</section>
	)
}

export default ContactForm
