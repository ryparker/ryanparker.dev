import { Button, Input } from 'Common'
import { reCaptchaKey } from 'Data'
import { ErrorMessage, FastField, Form, withFormik } from 'formik'
import fetch from 'node-fetch'
import React from 'react'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'

import { Center, Error, InputField } from './styles'

const EMAIL_API_TOKEN = process.env.EMAIL_API_TOKEN
const EMAIL_USER_ID = process.env.EMAIL_USER_ID
const EMAIL_TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID

const ContactForm = ({ setFieldValue, isSubmitting, values, errors, touched }) => (
	<Form name='portfolio-dev' method='post'>
		<InputField>
			<Input
				as={FastField}
				type='text'
				name='name'
				component='input'
				aria-label='name'
				placeholder='Full name*'
				error={touched.name && errors.name}
			/>
			<ErrorMessage component={Error} name='name' />
		</InputField>
		<InputField>
			<Input
				id='email'
				aria-label='email'
				component='input'
				as={FastField}
				type='email'
				name='email'
				placeholder='Email*'
				error={touched.email && errors.email}
			/>
			<ErrorMessage component={Error} name='email' />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				component='textarea'
				aria-label='message'
				id='message'
				rows='8'
				type='text'
				name='message'
				placeholder='Message*'
				error={touched.message && errors.message}
			/>
			<ErrorMessage component={Error} name='message' />
		</InputField>
		{values.name && values.email && values.message && (
			<InputField>
				<FastField
					component={Recaptcha}
					sitekey={reCaptchaKey}
					name='recaptcha'
					onChange={(value) => setFieldValue('recaptcha', value)}
				/>
				<ErrorMessage component={Error} name='recaptcha' />
			</InputField>
		)}
		{values.success && (
			<InputField>
				<Center>
					<h3>Thanks! I&apos;ll get back to you soon!</h3>
				</Center>
			</InputField>
		)}
		<Center>
			<Button secondary type='submit' disabled={isSubmitting}>
				Contact me
			</Button>
		</Center>
	</Form>
)

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		message: '',
		recaptcha: '',
		success: false,
	}),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required('Full name field is required'),
			email: Yup.string().email('Invalid email').required('Email field is required'),
			message: Yup.string().required('Message field is required'),
			recaptcha: Yup.string().required('Robots are not welcome yet!'),
		}),
	handleSubmit: async ({ name, email, message, recaptcha }, { setSubmitting, resetForm, setFieldValue }) => {
		try {
			await fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${EMAIL_API_TOKEN}`,
				},
				body: JSON.stringify({
					service_id: 'default_service',
					template_id: EMAIL_TEMPLATE_ID,
					user_id: EMAIL_USER_ID,
					template_params: {
						reply_to: name,
						name,
						email,
						message,
						'g-recaptcha-response': recaptcha,
					},
				}),
			})
			await setSubmitting(false)
			await setFieldValue('success', true)
			setTimeout(() => resetForm(), 2000)
		} catch (error) {
			setSubmitting(false)
			setFieldValue('success', false)
			alert('Something went wrong, please try again!')
		}
	},
})(ContactForm)
