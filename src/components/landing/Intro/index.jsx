import {Button, Container} from 'Common';
import {Detail, IntroWrapper, Thumbnail, Wrapper} from './styles';

import {Header} from 'Theme';
import React from 'react';
import Terminal from './Terminal';
import dev from 'Static/illustrations/dev.png';

function openResumeTab() {
	window.open(
		'https://docs.google.com/document/d/1IAqd3HiYHBNwE1kDcgq5hEVKXUYBs17L2QnJcGcBMjc/edit?usp=sharing',
		'_blank'
	);
}

export const Intro = () => (
	<Wrapper>
		<Header/>
		<IntroWrapper as={Container}>
			<Detail className="content">
				<h1>Hi there!</h1>
				<Terminal actions={[
					{command: '<span class=\'command\'>echo</span> $WHO_AM_I', response: 'I’m Ryan Parker.'},
					{command: '<span class=\'command\'>echo</span> $WHAT_I_DO', response: 'I’m an Automation Engineer.'},
					{command: '<span class=\'command\'>echo</span> $(<span class=\'command\'>random_specialty</span>)', response: 'I specialize in Testing Frameworks.'},
					{command: '\`<span class=\'command\'>echo</span> $(<span class=\'command\'>random_specialty</span>)\`', response: 'I specialize in Development Tooling.'},
					{command: '\`<span class=\'command\'>echo</span> $(<span class=\'command\'>random_specialty</span>)\`', response: 'I specialize in CI/CD Infrastructure.'},
					{command: '\`<span class=\'command\'>echo</span> $(<span class=\'command\'>random_specialty</span>)\`', response: 'I specialize in Realtime Dashboards.'}
				]}/>
				<Button id="resume" onClick={() => openResumeTab()}>
					Resume
				</Button>
			</Detail>
			<Thumbnail className="thumbnail">
				<img src={dev} quality={100} alt="Man on laptop next to git tree."/>
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
);
