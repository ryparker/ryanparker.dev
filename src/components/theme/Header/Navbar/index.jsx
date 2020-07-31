import {Container} from 'Common';
import NavbarLinks from '../NavbarLinks';
import React from 'react';
import {Wrapper} from './styles';

const Navbar = () => (
	<Wrapper as={Container} data-cy="navbar">
		<a href="https://github.com/ryparker/ryanparker.dev" target="_blank" rel="noopener noreferrer">Source Code</a>
		<NavbarLinks desktop/>
	</Wrapper>
);

export default Navbar;
