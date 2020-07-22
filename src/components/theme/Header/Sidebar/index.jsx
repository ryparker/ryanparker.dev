import NavbarLinks from '../NavbarLinks';
import PropTypes from 'prop-types';
import React from 'react';
import {Wrapper} from './styles';

const Sidebar = ({sidebar, toggle}) => (
	<Wrapper active={sidebar} onClick={toggle}>
		<NavbarLinks/>
	</Wrapper>
);

Sidebar.propTypes = {
	sidebar: PropTypes.bool,
	toggle: PropTypes.func
};

export default Sidebar;
