import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import analytics from 'Static/illustrations/analytics.svg'
import {
	Wrapper,
	SkillsWrapper,
	Details,
	Thumbnail,
	StyledImage,
	SkillTitle,
	SkillList,
} from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<StyledImage
					src={dev}
					alt="I’m Ryan and I’m an Automation Engineer!"
				/>
				<StyledImage
					src={analytics}
					alt="I’m Ryan and I’m an Automation Engineer!"
				/>
			</Thumbnail>
			<Details>
				<h1>Accomplishments</h1>
				<SkillTitle>Automation</SkillTitle>
				<SkillList>
					<li>
						Restructured and automated Jira to reflect development in real time.
					</li>
					<li>Integrated automated tests into CI/CD processes.</li>
				</SkillList>
				<SkillTitle>Accessability</SkillTitle>
				<SkillList>
					<li>Integrated with AWS to enable deployments from slack.</li>
					<li>
						Empower everyone with the ability to kick off automated test suites.
					</li>
				</SkillList>
				<SkillTitle>Feature Development</SkillTitle>
				<SkillList>
					<li>React</li>
					<li>Storybook</li>
					<li>Grails</li>
				</SkillList>
				<SkillTitle>Testing</SkillTitle>
				<SkillList>
					<li>
						REST and SOAP API test suites that assert functionality,
						performance, security, and data structure.
					</li>
					<li>UI end to end test suites using non-web driver libraries.</li>
					<li>UI visual regression tests.</li>
					<li>Unit and Integration tests in Grails, Java, and Javascript.</li>
					<li>Health monitors for production services.</li>
				</SkillList>
				<SkillTitle>Documentation</SkillTitle>
				<SkillList>
					<li>
						Developed a service in grails that generates openAPI3 documentation.
					</li>
					<li>Written API documentation for integration partners.</li>
					<li>Written process documentation for automation.</li>
				</SkillList>
				<Button as={AnchorLink} href="#contact">
					Contact me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
