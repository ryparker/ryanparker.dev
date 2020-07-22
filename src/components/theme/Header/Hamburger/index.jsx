import {Bar, Wrapper} from './styles';

import PropTypes from 'prop-types';
import React from 'react';

const Hamburger = ({sidebar, toggle}) => (
	<Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
		<Bar top sidebar={sidebar}/>
		<Bar mid sidebar={sidebar}/>
		<Bar bottom sidebar={sidebar}/>
	</Wrapper>
);

Hamburger.propTypes = {
	sidebar: PropTypes.bool,
	toggle: PropTypes.func
};

export default Hamburger;
