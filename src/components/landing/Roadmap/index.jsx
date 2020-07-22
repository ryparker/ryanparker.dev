import {
	Details,
	Skill,
	SkillTitle,
	SkillsWrapper,
	StyledImage,
	Thumbnail,
	Wrapper
} from './styles';

import {Container} from 'Common';
import React from 'react';
import dev from 'Static/illustrations/roadmap.svg';

export const Roadmap = () => (
	<Wrapper id="roadmap">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<StyledImage src={dev} alt="Man presenting analytics"/>
			</Thumbnail>
			<Details>
				<h2>Roadmap</h2>
				<SkillTitle>On Deck</SkillTitle>
				<ul>
					<Skill>Deploy in-house monitor solution.</Skill>
					<Skill>Design & implement monitors page for operations dashboard.</Skill>
				</ul>
				<SkillTitle>Recently Completed</SkillTitle>
				<ul>
					<Skill>Generate JSON schemas using new API test framework.</Skill>
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
);
