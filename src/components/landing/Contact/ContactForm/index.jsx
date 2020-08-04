import * as Yup from 'yup';

import {Button, Input} from 'Common';
import {Center, Error, InputField} from './styles';
import {ErrorMessage, FastField, Form, withFormik} from 'formik';

import PropTypes from 'prop-types';
import React from 'react';
import Recaptcha from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

const reCaptchaKey = process.env.GATSBY_RE_CAPTCHA_KEY;
const EMAIL_USER_ID = process.env.GATSBY_EMAIL_USER_ID;
const EMAIL_TEMPLATE_ID = process.env.GATSBY_EMAIL_TEMPLATE_ID;

const ContactForm = ({setFieldValue, isSubmitting, values, errors, touched}) => (
	<Form name="portfolio-dev" method="post">
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="name"
				component="input"
				aria-label="name"
				placeholder="Full name*"
				error={touched.name && errors.name}
			/>
			<ErrorMessage component={Error} name="name"/>
		</InputField>
		<InputField>
			<Input
				id="email"
				aria-label="email"
				component="input"
				as={FastField}
				type="email"
				name="email"
				placeholder="Email*"
				error={touched.email && errors.email}
			/>
			<ErrorMessage component={Error} name="email"/>
		</InputField>
		<InputField>
			<Input
				as={FastField}
				component="textarea"
				aria-label="message"
				id="message"
				rows="8"
				type="text"
				name="message"
				placeholder="Message*"
				error={touched.message && errors.message}
			/>
			<ErrorMessage component={Error} name="message"/>
		</InputField>
		{values.name && values.email && values.message && (
			<InputField>
				<FastField
					component={Recaptcha}
					sitekey={reCaptchaKey}
					name="recaptcha"
					onChange={value => setFieldValue('recaptcha', value)}
				/>
				<ErrorMessage component={Error} name="recaptcha"/>
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
			<Button secondary type="submit" disabled={isSubmitting}>
				Contact me
			</Button>
		</Center>
	</Form>
);

ContactForm.propTypes = {
	setFieldValue: PropTypes.func,
	isSubmitting: PropTypes.bool,
	values: PropTypes.object,
	errors: PropTypes.object,
	touched: PropTypes.object
};

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		message: '',
		recaptcha: '',
		success: false
	}),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required('Full name field is required'),
			email: Yup.string().email('Invalid email').required('Email field is required'),
			message: Yup.string().required('Message field is required'),
			recaptcha: Yup.string().required('Robots are not welcome yet!')
		}),
	handleSubmit: async ({name, email, message, recaptcha}, {setSubmitting, resetForm, setFieldValue}) => {
		const templateParameters = {
			reply_to: name,
			name,
			email,
			message,
			'g-recaptcha-response': recaptcha
		};

		await emailjs.send('gmail', EMAIL_TEMPLATE_ID, templateParameters, EMAIL_USER_ID).then(async response => {
			console.log({response});
			await setSubmitting(false);
			await setFieldValue('success', true);
			setTimeout(() => resetForm(), 2000);
		}).catch(async error => {
			console.log({error});
			setSubmitting(false);
			setFieldValue('success', false);
			window.alert('Something went wrong, please try again!');
		});
	}
})(ContactForm);

withFormik.propTypes = {
	mapPropsToValues: PropTypes.func,
	validationSchema: PropTypes.func,
	handleSubmit: PropTypes.func
};
