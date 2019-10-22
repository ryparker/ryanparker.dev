import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects />
		<Skills 
			data-sal="slide-left" 
			data-sal-duration="8000" 
			data-sal-delay="8000" 
			data-sal-easing="ease-out"
		/>
		<Contact />
	</Layout>
)
