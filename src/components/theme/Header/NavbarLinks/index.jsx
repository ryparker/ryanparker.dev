import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';
import React from 'react';
import {Wrapper} from './styles';

const NavbarLinks = ({desktop}) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#roadmap">Roadmap</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
	</Wrapper>
);

NavbarLinks.propTypes = {
	desktop: PropTypes.bool
};
export default NavbarLinks;
