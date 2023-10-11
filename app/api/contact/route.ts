import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
	try {
		let transporter = nodemailer.createTransport({
			host: 'smtp.sendgrid.net',
			port: 587,
			auth: {
				user: 'apikey',
				pass: process.env.SENDGRID_API_KEY,
			},
		})

		const requestBodyText = await request.text()

		const { data } = JSON.parse(requestBodyText)
		await transporter.sendMail({
			from: 'jordan533@o2.pl',
			to: 'jordan533@o2.pl',
			replyTo: data.email,
			subject: `Website activity from ${data.email}`,
			html: `
		  <p>Name: ${data.username} </p>
		  <p>Email: ${data.email} </p>
		  <p>Message: ${data.message} </p>
		  `,
		})

		return NextResponse.json({ error: false, message: 'Email wysłany' })
	} catch (error) {
		console.error(error)

		return NextResponse.json({ error: true, message: 'Coś poszło nie tak...' })
	}
}
