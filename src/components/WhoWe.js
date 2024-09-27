import React from 'react'
import bgimg from '../assets/pattern-1.png'
import userImg from '../assets/boxser.png'
import { Container, Row, Col } from 'react-bootstrap'
import aboutbg from '../assets/about_bg.jpg';
import aboutbg2 from '../assets/h3_about_shape01.png';
export default function WhoWe() {
    return (
        <>
            <div className='aboutDetails'>
                <div className="about-one_pattern" style={{ backgroundImage: `url(${aboutbg})` }}></div>
                <Container>
                    <Row className='align-items-center'>
                       
                        <Col lg={6} className='about-one_image-column'>
                            <div className="about-one_image-inner-column">
                                <div className="about-one_icon">
                                    <img src={userImg} alt="" />
                                </div>

                            </div>
                        </Col>
                        <Col lg={6} className='about-one_content-column'>
                            <div className="about-one_content-inner-column">
                                <div className="sec-title">
                                <span class="sub-titleAbout">About Our Company</span>
                                    <h2 className="sec-title_heading">Pioneers in Healthcare IT solutions</h2>
                                    {/* <h3>for more than 30 years</h3> */}

                                    <div className="sec-title_text">We are one of the pioneers Hospital Information System (HIS) company <span>with 30 years of experience in the single domain of healthcare</span> and specialized in delivering management information systems for Hospitals, Medical Colleges, Clinics, Diagnostic Centers and Pharmacy Chains. We have around <span>400+ Hospitals</span> and Medical Colleges projects (Hospitals from 20 Beds up to 1800 Beds) running Worldwide.</div>
                                    <div className="sec-title_text">We have a global presence in 14 countries till date including <span>Saudi Arabia, Dubai, Bahrain, Oman, Qatar, Bangladesh, Philippines, Nigeria, Kenya, Myanmar, Maldives </span>etc. In <span>India </span>we are serving in more than <span>24 states </span>and over <span>40 cities.</span></div>
                                    <div className="sec-title_text">Our solutions are completely web/browser-based and can be hosted on Cloud. This provides flexibility of accessing the software anywhere and at any time.</div>
                                </div>

                               
                                <div className="about__content-inner about__content-inner-two mt-5">
                                <div className="experience__box-three">
                                    <div className="title">
                                        <span>25</span>
                                    </div>
                                    <p>Years <span>Experience</span> in Consulting</p>
                                </div>
                                <div className="about__list-box about__list-box-two">
                                    <ul className="list-wrap">
                                        <li><i class="fa-solid fa-arrow-right"></i>Business Growth</li>
                                        <li><i class="fa-solid fa-arrow-right"></i>Analysis &amp; Research</li>
                                        <li><i class="fa-solid fa-arrow-right"></i>100% Secure</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="about__shape-wrap-three">
                                <img src={aboutbg2} alt="" className="rotateme" />
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
