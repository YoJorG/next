'use client'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/src/utils/sendEmail'
import { useState } from 'react'
import Image from 'next/image'
export type FormData = {
	email: string
	username: string
	message: string
}

type IState = 'sent' | 'notsent' | 'error'

function ContactForm() {
	const { register, handleSubmit } = useForm<FormData>()
	const [formStatus, setFormStatus] = useState<IState>('notsent')

	async function onSubmit(data: FormData) {
		const request = await sendEmail(data)
		if (!request?.data.error) {
			setFormStatus('sent')
		} else {
			setFormStatus('error')
		}
	}
	return (
		<section className='bg-gray-50 pb-8' id='kontakt'>
			<div className='container py-8 mx-auto flex flex-col items-center px-1 md:px-4'>
				<h2 className='text-blue-600 font-bold text-2xl mb-8 before:w-full before:h-1 before:left-0 before:-bottom-0 before:border-b-2 before:border-blue-400 before:absolute relative before:bg-blue-600 my-8 '>
					Kontakt
				</h2>
				{formStatus === 'notsent' && (
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
							className='border-2 border-blue-800 py-2 rounded-md mb-2 px-1 shadow-sm'
							{...register('email', { required: true })}
						/>
						<label htmlFor='username' className='text-white'>
							Imię:
						</label>
						<input
							type='text'
							id='username'
							className='border-2 border-blue-800  py-2 rounded-md mb-2 px-1 shadow-sm'
							{...register('username', { required: true })}
						/>
						<label htmlFor='textarea' className='text-white rounded-md '>
							Wiadomość:
						</label>
						<textarea
							id='textarea'
							maxLength={512}
							className='border-2 border-blue-800 h-48 resize-none rounded-md px-1 shadow-sm'
							{...register('message', { required: true })}
						></textarea>
						<button
							type='submit'
							className='mb-10 bg-white py-2 px-4 mt-4 border-2 border-blue-800 rounded-md text-blue-800 font-bold text-lg shadow-sm hover:shadow-none hover:bg-blue-800 hover:border-white hover:text-white'
						>
							Wyślij
						</button>
					</form>
				)}
				{formStatus === 'sent' && (
					<div className='flex items-center flex-col px-2 md:px-8 py-8  bg-blue-700 rounded-md max-w-2xl border-2 border-blue-800 w-full shadow-md'>
						<h4 className='text-lg font-bold text-white mb-8'>Wiadomość wysłana</h4>
						<Image src='/emailsend.gif' width={100} height={100} alt='Wiadomość wysłana' className='rounded-md mb-8' />
					</div>
				)}
				{formStatus === 'error' && (
					<div className='flex items-center flex-col px-2 md:px-8 py-8  bg-blue-700 rounded-md max-w-2xl border-2 border-blue-800 w-full shadow-md'>
						<h4 className='text-lg font-bold text-white mb-8'>Wystąpił nieoczekiwany błąd</h4>
						<Image
							src='/emailerror.gif'
							width={100}
							height={100}
							alt='Wiadomość nie wysłana'
							className='rounded-full mb-8'
						/>
						<button
							className='px-4 py-2 border-2 border-white rounded-md text-white font-bold hover:bg-white hover:text-blue-700'
							onClick={() => setFormStatus('notsent')}
						>
							Spróbuj jeszcze raz
						</button>
					</div>
				)}
			</div>
		</section>
	)
}

export default ContactForm
