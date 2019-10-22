import React from 'react'
import { graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import Img from 'gatsby-image'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail, Skill } from './styles'

export const Skills = ({ props }) => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img
					src={dev}
					alt="I’m Ryan and I’m a Software Development Engineer in Test!"
				/>
			</Thumbnail>
			<Details>
				<h1>Accomplishments</h1>
				<h2>Automation</h2>
				<ul>
					<Skill>
						Restructured and automated Jira to reflect development in real time.
					</Skill>
					<Skill>Integrated automated tests into CI/CD processes.</Skill>
				</ul>
				<h2>Accessability</h2>
				<ul>
					<Skill>Integrated with AWS to enable deployments from slack.</Skill>
					<Skill>
						Empower everyone with the ability to kick off automated test suites.
					</Skill>
				</ul>
				<h2>Feature Development</h2>
				<ul>
					<Skill>React</Skill>
					<Skill>Storybook</Skill>
					<Skill>Grails</Skill>
				</ul>
			</Details>
		</SkillsWrapper>
		<SkillsWrapper as={Container}>
			<Details>
				<h2>Testing</h2>
				<ul>
					<Skill>
						REST and SOAP API test suites that assert functionality,
						performance, security, and data structure.
					</Skill>
					<Skill>
						UI end to end test suites using non-web driver libraries.
					</Skill>
					<Skill>UI visual regression tests.</Skill>
					<Skill>
						Unit and Integration tests in Grails, Java, and Javascript.
					</Skill>
					<Skill>Health monitors for production services.</Skill>
				</ul>
				<h2>Documentation</h2>
				<ul>
					<Skill>
						Developed a service in grails that generates openAPI3 documentation.
					</Skill>
					<Skill>Written API documentation for integration partners.</Skill>
					<Skill>Written process documentation for automation.</Skill>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<Img
					title="Analytic image"
					alt="I’m Ryan and I’m a Software Development Engineer in Test!"
					fluid={props.analyticsImage.childImageSharp.fluid}
				/>
			</Thumbnail>
		</SkillsWrapper>
	</Wrapper>
)

export const query = graphql`
	query {
		analyticsImage: file(relativePath: { eq: "analytics.svg" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 100) {
					...GatsbyImageSharpFluid
					presentationWidth
				}
			}
		}
	}
`
