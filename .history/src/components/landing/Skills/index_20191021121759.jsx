import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Ryan and I’m a Software Development Engineer in Test!" />
			</Thumbnail>
			<Details>
				<h1>Accomplishments</h1>
				<p>
					Today, developers are expected to deliver high quality software faster than ever. But how?
				</p>
				<h2>Automation</h2>
				<ul>
					<li>Automated Jira to reflect development in real time.</li>
					<li>Integrated automated tests into CI/CD processes.</li>
				</ul>
				<h2>Provided accessability</h2>
				<ul>
					<li>Developed an integration in AWS to enable deployments from slack.</li>
					<li>Allowed tests to be kicked off by anyone.</li>
				</ul>
				<h2>Testing</h2>
				<ul>
					<li>Created API test suites.</li>
					<li>Created UI test suites using non-web driver libraries.</li>
					<li>Created UI visual regression tests.</li>
					<li>Setup health monitors for production services.</li>
				</ul>
				<h2>Documentation</h2>
				<ul>
					<li>Developed a plugin for grails that generates a openAPI3 document.</li>
					<li>Written API documentation for integration partners.</li>
					<li>Written process documentation for automation.</li>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
