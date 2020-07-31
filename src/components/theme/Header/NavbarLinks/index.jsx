import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';
import React from 'react';
import {Wrapper} from './styles';

const NavbarLinks = ({desktop}) => (
	<Wrapper desktop={desktop}>
		<AnchorLink data-cy="projects-link" href="#projects">Projects</AnchorLink>
		<AnchorLink data-cy="roadmap-link" href="#roadmap">Roadmap</AnchorLink>
		<AnchorLink data-cy="contact-link" href="#contact">Contact</AnchorLink>
	</Wrapper>
);

NavbarLinks.propTypes = {
	desktop: PropTypes.bool
};
export default NavbarLinks;
