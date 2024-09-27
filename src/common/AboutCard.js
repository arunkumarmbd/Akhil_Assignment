import React from 'react'
import CountUp from 'react-countup'

export default function AboutCard({ image, heading, text, numbers }) {
  return (
    <>
      <div className='aboutItem'>
        <div className='imageSec'>
          <img src={image} alt="experienceItem" />
        </div>
        <h4>{heading}</h4>
        <CountUp end={numbers} duration={5} />
        <p>{text}</p>
      </div>
    </>
  )
}
