import React from 'react';
import {Particles as ReactParticles} from 'react-particles-js';
import particleConfig from './particle-config.json';

export const Particles = () => {
	return (
		<ReactParticles
			width="100%"
			height="100%"
			style={{
				position: 'fixed',
				zIndex: '-99',
				overflow: 'hidden'
			}}
			params={particleConfig}
			data-cy="particles"
		/>
	);
};
