import React, { useState } from 'react'
import WeDoCard from '../common/WeDoCard';
import { Col, Container, Row } from 'react-bootstrap';
import pic1 from "../assets/box-pioneers.webp"
import pic2 from "../assets/box-global-presence.webp"
import pic3 from "../assets/box-proven.webp"
import pic4 from "../assets/box-award.webp"
import pic5 from "../assets/box-support.webp"
import pic6 from "../assets/box-cloud-basic.webp"

export default function WhatWe() {
  const [cardDetals, setCardDetals] = useState([
    {
      picture: pic1,
      title: "Pioneers",
      text: "30+ Years of experience in Single domain of Healthcare.",
      btext: "Explore More"
    },
    {
      picture: pic2,
      title: "Global Presence",
      text: "Global presence in multiple countries and still growing.",
      btext: "Explore More"
    },
    {
      picture: pic3,
      title: "Proven",
      text: "400+ successful HIS implementation all around the world.",
      btext: "Explore More"
    },
    {
      picture: pic4,
      title: "Award",
      text: "Awarded as the “Best HIS Provider of the Year”.",
      btext: "Explore More"
    },
    {
      picture: pic5,
      title: "Support",
      text: "Dedicated and professional support team with excellent post sales support.",
      btext: "Explore More"
    },
    {
      picture: pic6,
      title: "Cloud Based",
      text: "Cloud based solution available to minimize the hardware load.",
      btext: "Explore More"
    }
  ]);
  return (
    <>
      <div className='whatwedo bg-color1'>
        <Container>
          <Row>
            <Col lg={8} className='m-auto'>
              <div className="sec-title_title text-center">
                <h2>WHAT WE DO</h2>               
              </div>
              <p className='textContent'>At Akhil Systems Pvt Ltd, we provide cutting-edge healthcare IT solutions that enhance patient care, streamline hospital operations, and improve overall healthcare management.</p>
            </Col>
            </Row>
            <Row>
            {
              cardDetals.map(item =>
                <Col lg={4}>
                  <WeDoCard picture={item.picture} Title={item.title} Text={item.text} Btext={item.btext} />
                </Col>
              )
            }
          </Row>
        </Container>
      </div>

    </>
  )
}
