import { Button, Container } from 'Common'
import React from 'react'
import Typed from 'react-typed'
import dev from 'Static/illustrations/dev.png'
import { Header } from 'Theme'

import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles'

function openResumeTab() {
	window.open(
		'https://docs.google.com/document/d/1IAqd3HiYHBNwE1kDcgq5hEVKXUYBs17L2QnJcGcBMjc/edit?usp=sharing',
		'_blank'
	)
}

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi there!</h1>
				<h4>
					<Typed
						loop
						smartBackspace
						showCursor
						typeSpeed={30}
						backSpeed={20}
						strings={[
							"I’m <span class='accent'>Ryan Parker</span>.",
							"I’m an <span class='accent'>Automation Engineer</span>.",
							"I specialize in <span class='accent'>Testing Frameworks</span>.",
							"I specialize in <span class='accent'>Development Tooling</span>.",
							"I specialize in <span class='accent'>CI/CD Infrastructure</span>.",
							"I specialize in <span class='accent'>Realtime Dashboards</span>.",
						]}
						backDelay={1000}
						loopCount={0}
						cursorChar='|'
						className='typed'
					/>
				</h4>
				<Button id='resume' onClick={() => openResumeTab()}>
					Résumé
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt='Man on laptop next to git tree.' />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
