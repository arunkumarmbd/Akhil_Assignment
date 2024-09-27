import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AboutCard from '../common/AboutCard';
import img1 from "../assets/watsNew/img5.png"
import img2 from "../assets/watsNew/img2.png"
import img3 from "../assets/watsNew/img3.png"
import img4 from "../assets/watsNew/img4.png"

import patter2 from '../assets/pattern-2.png';
import patter3 from '../assets/pattern-3.png';

export default function About() {
    const [cardData, setcardData] = useState([
        {
            image: img1,
            heading: "Successfully Completed Projects",
            numbers: 45,
            text: "+"
        },
        {
            image: img2,
            heading: "Satisfied 100% Our Clients",
            numbers: 92,
            text: "K"
        }, {
            image: img3,
            heading: "All Over The World We Are Available",
            numbers: 19,
            text: "+"
        }, {
            image: img4,
            heading: "Years of Experiences To Run This Company",
            numbers: 25,
            text: "+"
        }
    ])
    return (
        <>


     



            <div className='services-one'>
                <div class="services-one_pattern" style={{ backgroundImage: `url(${patter2})` }}></div>
                {/* <div class="services-one_pattern-two" style={{ backgroundImage: `url(${patter3})` }}></div> */}
                <div className='customAbout'>
                    <Container>
                        <Row>
                            {
                                cardData.map((item) =>
                                    <Col lg={3}>
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
