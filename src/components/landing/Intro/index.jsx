import React from 'react'
import Typed from 'react-typed'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.png'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "I’m <span class='accent'>Ryan Parker</span>.",
              "I’m an <span class='accent'>Automation Engineer</span>.",
              "I’m a <span class='accent'>QA Analyst</span>.",
              "I’m a <span class='accent'>Javascript Developer</span>.",
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typed"
          />
        </h4>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Ryan and I’m an Automation Engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)
