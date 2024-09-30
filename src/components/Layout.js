import React, { useState } from 'react'
import Header from './Header'
import HeroSlider from './HeroSlider'
import About from './About'
import WhoWe from './WhoWe'
import WhatWe from './WhatWe'
import WhatNew from './WhatNew'
import Demo from './Demo'

export default function Layout() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Demo show={showModal} handleClose={() => setShowModal(false)}/>
      <div className='StaticLabel'>
        <div class="njs-sticky-side body-append image_button_cover placement-right now-show">
          <a onClick={() => setShowModal(true)}>Request Demo</a>
        </div>

      </div>
      <Header />
      <HeroSlider />
      <About />
      {/* <WhatNew /> */}
      <WhoWe />
    
      <WhatWe />
    </>
  )
}
