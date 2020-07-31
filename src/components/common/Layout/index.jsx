import './fonts.css';

import {Footer, Particles} from 'Theme';

import {Global} from './styles';
import PropTypes from 'prop-types';
import React from 'react';

export const Layout = ({children}) => (
	<>
		<Global/>
		<Particles/>
		{children}
		<Footer/>
	</>
);

Layout.propTypes = {
	children: PropTypes.array
};
