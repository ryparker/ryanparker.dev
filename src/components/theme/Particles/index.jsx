import React from 'react';
import ReactParticles from 'react-particles-js';

export const Particles = () => {
	return (
		<ReactParticles
			data-cy="particles"
			width="100%"
			height="100%"
			style={{
				position: 'fixed',
				zIndex: '-99',
				overflow: 'hidden'
			}}
			params={{
				particles: {
					number: {
						value: 100
					},
					color: {
						value: '#6B63FF'
					},
					shape: {
						type: 'polygon',
						stroke: {
							width: 0,
							color: '#6B63FF'
						},
						polygon: {
							nb_sides: 5
						}
					},
					opacity: {
						value: 0.5,
						random: false
					},
					size: {
						value: 2,
						random: false
					},
					line_linked: {
						enable: true,
						distance: 200,
						color: '#6B63FF',
						opacity: 0.38481889460772545,
						width: 1
					},
					move: {
						enable: true,
						speed: 2,
						direction: 'bottom',
						random: true,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: {
							enable: true,
							rotateX: 10000,
							rotateY: 10000
						}
					}
				},
				interactivity: {
					detect_on: 'window',
					events: {
						onhover: {
							enable: true,
							mode: 'grab'
						},
						onclick: {
							enable: true,
							mode: 'repulse'
						},
						resize: true
					},
					modes: {
						grab: {
							distance: 150,
							line_linked: {
								opacity: 1
							}
						},
						bubble: {
							distance: 300,
							size: 15,
							duration: 2,
							opacity: 1
						},
						repulse: {
							distance: 200,
							duration: 0.4
						},
						push: {
							particles_nb: 4
						},
						remove: {
							particles_nb: 2
						}
					}
				},
				retina_detect: true
			}}
		/>
	);
};
