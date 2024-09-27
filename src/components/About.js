import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AboutCard from '../common/AboutCard';
import img1 from "../assets/watsNew/experience.png"
import img2 from "../assets/watsNew/client.png"
import img3 from "../assets/watsNew/opd-his.png"
import img4 from "../assets/watsNew/opd-patient.png"
import img5 from "../assets/watsNew/modules.png"
import img6 from "../assets/watsNew/client.png"
import patter2 from '../assets/pattern-2.png';
import patter3 from '../assets/pattern-3.png';

export default function About() {
    const [cardData, setcardData] = useState([
        {
            image: img1,
            heading: "Experience",
            numbers: 30,
            text: "+ Years"
        },
        {
            image: img2,
            heading: "Clients",
            numbers: 400,
            text: "+"
        }, {
            image: img3,
            heading: "Presence in India",
            numbers: 25,
            text: "+ States"
        }, {
            image: img4,
            heading: "Global presence in",
            numbers: 14,
            text: "+ Countries"
        }, {
            image: img5,
            heading: "Admission per year",
            numbers: 300000,
            text: "+ Per Year"
        }, {
            image: img6,
            heading: "OPD Patients per year",
            numbers: 360000,
            text: "+"
        }
    ])
    return (
        <>

            <div className='services-one'>
                <div class="services-one_pattern" style={{ backgroundImage: `url(${patter2})` }}></div>
                <div class="services-one_pattern-two" style={{ backgroundImage: `url(${patter3})` }}></div>
                <div className='customAbout'>
                    <Container>
                        <Row>
                            {
                                cardData.map((item) =>
                                    <Col lg={4}>
                                        <AboutCard image={item.image} heading={item.heading} text={item.text} numbers={item.numbers} />
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </>

    )
}
