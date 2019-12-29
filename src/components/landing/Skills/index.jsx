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
  Skill,
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
        <h2>Recent Work</h2>
        <SkillTitle>Current</SkillTitle>
        <ul>
          <Skill>Test automation roadmap.</Skill>
          <Skill>Integrate test suites into AWS deployment process.</Skill>
          <Skill>
            New test reporter that supports history and trend analysis.
          </Skill>
        </ul>
        <SkillTitle>Completed</SkillTitle>
        <ul>
          <Skill>Slack/Jira/Github serverless Javascript application.</Skill>
          <Skill>PDF signature validation Javascript tests.</Skill>
          <Skill>PDF Visual regression tests.</Skill>
          <Skill>Document data validation Javascript tests.</Skill>
          <Skill>Grails API to seed database.</Skill>
          <Skill>Setup and automated Jira.</Skill>
          <Skill>
            Slack/AWS serverless Python application to support AWS deployments.
          </Skill>
          <Skill>Advanced search component for React.</Skill>
          <Skill>Visual regression tests for Storybook.</Skill>
          <Skill>REST API test suite using Postman.</Skill>
          <Skill>
            SOAP API test suite transferred from SOAP-UI to Postman.
          </Skill>
          <Skill>UI smoke test suite using Cypress.</Skill>
          <Skill>24/7 Production health monitors using Postman.</Skill>
          <Skill>
            Grails API to reflectively generate openAPI3 documentation.
          </Skill>
          <Skill>API documentation for specific user roles.</Skill>
        </ul>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
