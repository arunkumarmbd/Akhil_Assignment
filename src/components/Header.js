import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import '../style/common.css';
import WhatNew from './WhatNew'

export default function Header() {
    return (
        <>
            <header>
                <div className='topHeader'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col>
                                <div className='informationSection'>
                                    
                                    <div className='emailSection'>
                                        <a href='mailto:sales@akhilsystems.com'>
                                            <i class="fa-solid fa-envelope"></i> sales@akhilsystems.com
                                        </a>
                                    </div>
                                    <div className='divide'>|</div>
                                    <div className='phoneSection'>
                                        <a href='tel:+91 8447846239'>
                                            <i class="fa-solid fa-phone"></i> +91 -  8447846239
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='informationSectionNew'>
                                <WhatNew />                             
                                  
                                </div>
                            </Col>
                            <Col>
                                <div className='informationSection'>
                                    <div className='phoneSection'>
                                        <a href='#'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </div>
                                    
                                    <div className='emailSection'>
                                        <a href='#'>
                                        <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>
                                    <div className='emailSection'>
                                        <a href='#'>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                    <div className='emailSection'>
                                        <a href='#'>
                                        <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Navbar expand="lg" className="customNav">
                    <Container>
                        <Navbar.Brand href="#home">
                            <div className='customLogo'>
                                <img src={logo} alt="Logo" />
                            </div>
                        </Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-sm`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                    Menu
                                </Offcanvas.Title>

                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto">
                                        <Nav.Link href="#link">About</Nav.Link>
                                        <NavDropdown title="Product" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#">Miracle HIS <span> Hospital Information Systems</span></NavDropdown.Item>
                                            <NavDropdown.Item href="#">Miracle EMR <span> Electronic Medical Records</span></NavDropdown.Item>
                                            <NavDropdown.Item href="#">Miracle LIS<span>  Laboratory Information Systems</span></NavDropdown.Item>
                                            <NavDropdown.Item href="#">Miracle RIS <span> Radiology Information Systems </span></NavDropdown.Item>
                                            <NavDropdown.Item href="#">Miracle PIS <span> Pharmacy Information Syste </span></NavDropdown.Item>
                                            <NavDropdown.Item href="#">Miracle on Cloud</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Miracle Clinics</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Mobility Solutions</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Miracle Ngage</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Third Party Integration</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#link">Clients</Nav.Link>
                                        <NavDropdown title="Gallery" id="basic-nav-dropdown2">
                                            <NavDropdown.Item href="#">Photo Gallery</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Videos</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#link">Blog</Nav.Link>
                                        <Nav.Link href="#link">Partner</Nav.Link>
                                        <Nav.Link href="#link">Career</Nav.Link>
                                        <Nav.Link href="#link">Contact us</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
