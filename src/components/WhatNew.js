import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'

export default function WhatNew() {
  const [sampleData, setSampleData] = useState([
    // Same substring at the start will only be typed out once, initially
    'AI Diagnostics: Faster, more accurate disease detection using AI tools.',
    1000, // wait 1s before replacing "Mice" with "Hamsters"
    'Telemedicine Growth: Remote consultations and patient care expanding globally.',
    1000,
    'Personalized Medicine: Treatments tailored to individual genetic profiles.',
    1000,
    'Wearable Health Tech: Real-time health monitoring through advanced wearables.',
    1000
  ])
  return (
    <>
      <div className='whatNewSec'>
        <Container fluid>
          <Row>
            <Col>
              <div className='mainWhatNewItem'>

                <span className='headset'>Whats new</span>
                <TypeAnimation className='textRotates'
                  sequence={sampleData}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}
