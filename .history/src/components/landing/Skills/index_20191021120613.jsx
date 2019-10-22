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
				<h1>Mission</h1>
				<p>
					Today, developers are expected to deliver high quality software faster than ever. But how?
				</p>
				<h2>Automate</h2>
				<p>
					Automating the manual tasks can win back time.
				</p>
				<ul>
					<li>Automate Jira to capture development in real time</li>
					<li>Integrate automated tests into the CI/CD process.</li>
				</ul>
				<h2>Provide accessability</h2>
				<p>
					Sometimes automation is not always the answer.
				</p>
				<ul>
					<li>Ability to deploy from slack</li>
					<li></li>
				</ul>
				<h2>Encourage best practices</h2>
				<p>
					Writing tests that are dynamic, reduce risk, and encourage confidence, enables a development team to focus on developing new features.
				</p>
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
