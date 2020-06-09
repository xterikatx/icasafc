import React from 'react';
import { useMediaQuery } from 'react-responsive'

import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenMobile';

export default function Menu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div>
      {isDesktopOrLaptop ? <MenuDesktop /> : isTabletOrMobile ? <MenuMobile/> : null }
    </div>
   
  )
}