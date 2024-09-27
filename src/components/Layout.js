import React from 'react'
import Header from './Header'
import HeroSlider from './HeroSlider'
import About from './About'
import WhoWe from './WhoWe'
import WhatWe from './WhatWe'
import WhatNew from './WhatNew'

export default function Layout() {
  return (
    <>
      <div className='StaticLabel'>
        <div class="njs-sticky-side body-append image_button_cover placement-right now-show">
          <a href="#" rel="noopener noreferrer">Request Demo</a>
        </div>

      </div>
      <Header />
      <HeroSlider />
      <WhatNew />
      <WhoWe />
      <About />
      <WhatWe />
    </>
  )
}
