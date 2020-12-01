import './fonts.css';

import {Footer, Particles} from 'Theme';

import {Global} from './styles';
import {LayoutWrapper} from './layout-wrapper';
import PropTypes from 'prop-types';
import React from 'react';

export const Layout = ({children}) => (
	<>
		<Global/>
		<Particles data-cy="particles"/>
		<LayoutWrapper>
			{children}
		</LayoutWrapper>
		<Footer/>
	</>
);

Layout.propTypes = {
	children: PropTypes.array
};
