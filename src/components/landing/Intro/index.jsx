import {Button, Container} from 'Common';
import {Details, IntroWrapper, Thumbnail, Wrapper} from './styles';

import {Header} from 'Theme';
import React from 'react';
import Typed from './Typed';
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
			<Details>
				<h1>Hi there!</h1>
				<Typed/>
				<Button id="resume" onClick={() => openResumeTab()}>
					Résumé
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Man on laptop next to git tree."/>
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
);
