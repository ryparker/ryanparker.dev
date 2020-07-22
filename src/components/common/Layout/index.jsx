import './fonts.css';

import {Footer} from 'Theme';
import {Global} from './styles';
import PropTypes from 'prop-types';
import React from 'react';

export const Layout = ({children}) => (
	<>
		<Global/>
		{children}
		<Footer/>
	</>
);

Layout.propTypes = {
	children: PropTypes.array
};
