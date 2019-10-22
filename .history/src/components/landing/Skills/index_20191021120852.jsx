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
				<h2>Automate</h2>
				<ul>
					<li>Automate Jira to capture development in real time</li>
					<li>Integrate automated tests into a CI/CD process.</li>
				</ul>
				<h2>Provide accessability</h2>
				<ul>
					<li>Ability to deploy from slack</li>
					<li>Allow tests to be kicked off by anyone</li>
				</ul>
				<h2>Encourage best practices</h2>
				<ul>
					<li>Create tests that can adapt to environments and workflows.</li>
					<li>Created API test suites</li>
					<li>Created UI test suites using non-web driver libraries</li>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
