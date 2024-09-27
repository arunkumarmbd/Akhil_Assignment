import React, { useState } from 'react'
import WeDoCard from '../common/WeDoCard';
import { Col, Container, Row } from 'react-bootstrap';
import pic1 from "../assets/whatWeDo/poiner.png"
import pic2 from "../assets/whatWeDo/bg-global.png"
import pic3 from "../assets/whatWeDo/bg-implementation.png"
import pic4 from "../assets/whatWeDo/bg-award.png"
import pic5 from "../assets/whatWeDo/bg-support.png"
import pic6 from "../assets/whatWeDo/bg-cloudbased.png"

export default function WhatWe() {
  const [cardDetals, setCardDetals] = useState([
    {
      picture: pic1,
      title: "Pioneers",
      text: "30+ Years of experience in Single domain of Healthcare."
    },
    {
      picture: pic2,
      title: "Global Presence",
      text: "Global presence in multiple countries and still growing."
    },
    {
      picture: pic3,
      title: "Proven",
      text: "400+ successful HIS implementation all around the world."
    },
    {
      picture: pic4,
      title: "Award",
      text: "Awarded as the “Best HIS Provider of the Year”."
    },
    {
      picture: pic5,
      title: "Support",
      text: "Dedicated and professional support team with excellent post sales support."
    },
    {
      picture: pic6,
      title: "Cloud Based",
      text: "Cloud based solution available to minimize the hardware load."
    }
  ]);
  return (
    <>
      <div className='whatwedo'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="sec-title_title text-center">
                <h2>WHAT WE DO</h2>
                <div class="divided mb-5"></div>
              </div>
              <p className='textContent'>HOSPITAL MANAGEMENT SOFTWARE</p>
            </Col>
            {
              cardDetals.map(item =>
                <Col lg={4}>
                  <WeDoCard picture={item.picture} Title={item.title} Text={item.text} />
                </Col>
              )
            }
          </Row>
        </Container>
      </div>

    </>
  )
}
