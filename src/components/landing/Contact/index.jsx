import { Container } from 'Common'
import React from 'react'
import contact from 'Static/illustrations/contact.svg'

import ContactForm from './ContactForm'
import { Details, Thumbnail, Wrapper } from './styles'

export const Contact = () => (
	<Wrapper as={Container} id='contact'>
		<Details>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt='Two people talking.' />
		</Thumbnail>
	</Wrapper>
)
