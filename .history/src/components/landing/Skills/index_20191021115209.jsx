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
					Automating the manual tasks can win back time. I've worked with Jira to provide more detailed visibility into development while requiring little to no human interaction.
				</p>
				<h2>Provide accessability</h2>
				<p>
					Sometimes automation is not always the answer. I've found that by providing ways to trigger deploys from slack, developers and testers become more self sufficient.
				</p>
				<h2>Encourage best practices</h2>
				<p>
					Writing tests that are dynamic, reduce risk, and encourage confidence enables a development team to focus on developing new features and not maintenance.
				</p>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
