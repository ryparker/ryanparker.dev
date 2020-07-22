import {Contact, Intro, Projects, Roadmap, Stars} from 'Components/landing';
import {Layout, Seo} from 'Common';

import Particles from 'react-particles-js';
import React from 'react';
import particleConfig from './particle-config.json';

const App = () => (
	<Layout style={{position: 'absolute', height: '100%', width: '100%'}}>
		<Seo/>
		<Particles
			style={{
				position: 'fixed',
				height: '100%',
				minHeight: '100%',
				width: '100%',
				minWidth: '100%',
				top: 0,
				left: 0,
				zIndex: '-99',
				overflow: 'auto'
			}}
			params={particleConfig}
		/>
		<Intro/>
		<Projects/>
		<Stars/>
		<Roadmap/>
		<Contact/>
	</Layout>
);

export default App;
