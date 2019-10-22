import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import analytics from 'Static/illustrations/analytics.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail, Skill } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Ryan and I’m a Software Development Engineer in Test!" />
			</Thumbnail>
			<Details>
				<h1>Accomplishments</h1>
				<h2>Automation</h2>
				<ul>
					<skill>
						Restructured and automated Jira to reflect development in real time.</skill>
					<skill>Integrated automated tests into CI/CD processes.</skill>
				</ul>
				<h2>Accessability</h2>
				<ul>
					<skill>Integrated with AWS to enable deployments from slack.</skill>
					<skill>Empower everyone with the ability to kick off automated test suites.</skill>
				</ul>
				<h2>Feature Development</h2>
				<ul>
					<skill>React</skill>
					<skill>Storybook</skill>
					<skill>Grails</skill>
				</ul>
			</Details>
		</SkillsWrapper>
		<SkillsWrapper as={Container}>
			<Details>
				<h2>Testing</h2>
				<ul>
					<skill>REST and SOAP API test suites that assert functionality, performance, security, and data structure.</skill>
					<skill>UI end to end test suites using non-web driver libraries.</skill>
					<skill>UI visual regression tests.</skill>
					<skill>Unit and Integration tests in Grails, Java, and Javascript.</skill>
					<skill>Health monitors for production services.</skill>
				</ul>
				<h2>Documentation</h2>
				<ul>
					<skill>Developed a service in grails that generates openAPI3 documentation.</skill>
					<skill>Written API documentation for integration partners.</skill>
					<skill>Written process documentation for automation.</skill>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={analytics} alt="I’m Ryan and I’m a Software Development Engineer in Test!" />
			</Thumbnail>
		</SkillsWrapper>
	</Wrapper>
)
