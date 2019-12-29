import React from 'react'
import Particles from 'react-particles-js'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects } from 'Components/landing'

export default () => (
  <Layout style={{ position: 'absolute', height: '100%', width: '100%' }}>
    <SEO />
    <Particles
      type="inside"
      style={{
        position: 'fixed',
        height: '100%',
        minHeight: '100%',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: '-99',
        overflow: 'scroll',
      }}
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#6C63FF',
          },
          shape: {
            type: 'edge',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 300,
            color: '#6C63FF',
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse',
            },
            onclick: {
              enable: false,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 800,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 800,
              size: 80,
              duration: 2,
              opacity: 0.8,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)
