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
			<Details style={"data-sal":"fade";}>
				<h1>Accomplishments</h1>
				<h2>Automation</h2>
				<ul>
					<li>Restructured and automated Jira to reflect development in real time.</li>
					<li>Integrated automated tests into CI/CD processes.</li>
				</ul>
				<h2>Accessability</h2>
				<ul>
					<li>Integrated with AWS to enable deployments from slack.</li>
					<li>Empower everyone with the ability to kick off automated test suites.</li>
				</ul>
				<h2>Feature Development</h2>
				<ul>
					<li>React</li>
					<li>Storybook</li>
					<li>Grails</li>
				</ul>
				<h2>Testing</h2>
				<ul>
					<li>REST and SOAP API test suites that assert functionality, performance, security, and data structure.</li>
					<li>UI end to end test suites using non-web driver libraries.</li>
					<li>UI visual regression tests.</li>
					<li>Unit and Integration tests in Grails, Java, and Javascript.</li>
					<li>Health monitors for production services.</li>
				</ul>
				<h2>Documentation</h2>
				<ul>
					<li>Developed a service in grails that generates openAPI3 documentation.</li>
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
