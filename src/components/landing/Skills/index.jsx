import { Container } from 'Common'
import React from 'react'
import dev from 'Static/illustrations/skills.svg'

import {
  Details,
  Skill,
  SkillsWrapper,
  SkillTitle,
  StyledImage,
  Thumbnail,
  Wrapper,
} from './styles'

export const Skills = () => (
	<Wrapper id='about'>
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<StyledImage src={dev} alt='Man presenting analytics' />
			</Thumbnail>
			<Details>
				<h2>Projects</h2>
				<SkillTitle>On Deck</SkillTitle>
				<ul>
					<Skill>Design & implement monitors page for operations dashboard.</Skill>
					<Skill>Generate JSON schemas using new API test framework.</Skill>
				</ul>
				<SkillTitle>Recently Completed</SkillTitle>
				<ul>
					<Skill>Develop test harness for API testing using Jest.</Skill>
					<Skill>Design and stand up an internal operations dashboard.</Skill>
					<Skill>Integrate test suites into AWS deployment process.</Skill>
					<Skill>Develop reporting framework that supports presenting trends in test results.</Skill>
					<Skill>2020 Test automation roadmap.</Skill>
					<Skill>Serverless Slack applications that interface with AWS, Jira, Github.</Skill>
				</ul>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
