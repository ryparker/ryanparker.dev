import { Container } from 'Common'
import React from 'react'

import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<a href='https://github.com/ryparker/ryanparker.dev'>Source Code</a>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
