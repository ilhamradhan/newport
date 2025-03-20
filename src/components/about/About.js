import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Ilham{' '} ✨
              <span role="img" aria-label="cloud">
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="cloud">
                💬
              </span>{' '}
              I'm a Business Intelligence Analyst.  
            </p>
            <p>
              <span role="img" aria-label="cloud">
                💬
              </span>{' '}
              My current skill sets are SQL, Power BI, Tableau, CRM Analytics, ERP knowledge, Salesforce, ETL process, and Automation.
            </p>
            <p>
              <span role = "img" aria-label = "cloud"> 
                💬
              </span>{' '}
              I speak English, German and Indonesian. 
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="cloud">
                  💬
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'solving complex problems',
                    'trying new things',
                    'collaborating with others',
                    'pc gaming',
                    'mechanical keyboards',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              I love to learn new technologies! This has led me to self-learn some{' '}
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                interesting projects
              </Link>
              , and found some different way of thinking. This portfolio also was solely build to document my data visualizing skills and to pursue my further career in analytical role.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Berlin, Germany</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
