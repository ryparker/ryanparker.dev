import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail, StyledImage } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Ryan and I’m an Automation Engineer!" />
    </Thumbnail>
  </Wrapper>
)
