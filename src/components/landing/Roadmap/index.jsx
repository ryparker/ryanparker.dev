import {
	Details,
	Milestone,
	MilestoneTitle,
	MilestonesWrapper,
	Thumbnail,
	Wrapper
} from './styles';

import {Container} from 'Common';
import React from 'react';
import dev from 'Static/illustrations/roadmap.svg';

export const Roadmap = () => (
	<Wrapper id="roadmap">
		<MilestonesWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="Man presenting analytics"/>
			</Thumbnail>
			<Details>
				<h2>Roadmap</h2>
				<MilestoneTitle>On Deck</MilestoneTitle>
				<ul>
					<Milestone>Deploy in-house monitor solution.</Milestone>
					<Milestone>Design & implement monitors page for operations dashboard.</Milestone>
				</ul>
				<MilestoneTitle>Recently Completed</MilestoneTitle>
				<ul>
					<Milestone>Generate JSON schemas using new API test framework.</Milestone>
					<Milestone>Develop test harness for API testing using Jest.</Milestone>
					<Milestone>Design and stand up an internal operations dashboard.</Milestone>
					<Milestone>Integrate test suites into AWS deployment process.</Milestone>
					<Milestone>Develop reporting framework that supports presenting trends in test results.</Milestone>
					<Milestone>2020 Test automation roadmap.</Milestone>
					<Milestone>Serverless Slack applications that interface with AWS, Jira, Github.</Milestone>
				</ul>
			</Details>
		</MilestonesWrapper>
	</Wrapper>
);
