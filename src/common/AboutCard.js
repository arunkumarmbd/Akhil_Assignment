import React from 'react'
import CountUp from 'react-countup'

export default function AboutCard({ image, heading, text, numbers }) {
  return (
    <>
      <div className='aboutItems'>
        <div className='imageSec'>
          <img src={image} alt="experienceItem" />
        </div>
        <div className='textContent'>
       <div className='combined'>
       <CountUp end={numbers} duration={5} /><p>{text}</p>
       </div>
        <h4>{heading}</h4>
      
        </div>
        
      </div>

    

    </>
  )
}
