import { Layout, Seo } from 'Common'
import { Contact, Intro, Projects, Skills } from 'Components/landing'
import React from 'react'
import Particles from 'react-particles-js'

import particleConfig from './particle-config.json'

export default () => (
	<Layout style={{ position: 'absolute', height: '100%', width: '100%' }}>
		<Seo />
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
				overflow: 'auto',
			}}
			params={particleConfig}
		/>
		<Intro />
		<Projects />
		<Skills />
		<Contact />
	</Layout>
)
