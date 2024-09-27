import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import slideOne from '../assets/slider-one.jpg';
import slidetwo from '../assets/slider-two.png';
import slidethree from '../assets/slider-three.png';

export default function HeroSlider() {
  return (
    <>
      <div className='customSlider'>
        <Carousel fade>
          <Carousel.Item>
            <img src={slidetwo} alt="sliderImage" className='w-100' />

          </Carousel.Item>
          <Carousel.Item>
            <img src={slideOne} alt="sliderImage" className='w-100' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={slidethree} alt="sliderImage" className='w-100' />

          </Carousel.Item>
        </Carousel>

      </div>

    </>

  )
}
