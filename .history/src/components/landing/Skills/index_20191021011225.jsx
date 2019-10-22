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
				<h2>Create meaningful tests</h2>
				<p>
					Testing should reduce risk and encourage confidence. Test functionality, usablity, performance, and security.
				</p>
				<h2>Test early and often</h2>
				<p>
					Run tests when new code is committed and continuously throughout the SDLC.
				</p>
				<h2>Make testing accessible</h2>
				<p>
					Empower others with the ability to run tests remotely. This encourages quality development.
				</p>
				<h2>Collect and expose test results</h2>
				<p>
					Build a history of test results. This provides insight into fragile features, maintenance habits, and testing opportunities. Exposing test results will enable the team to help identify bottlenecks and opportunities.
				</p>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
