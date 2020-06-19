import React from 'react';
import { useMediaQuery } from 'react-responsive'

import MenuDesktop from './MenuDesktop';
import PersistentDrawerLeft from './MenMobile';

export default function Menu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div>
      {isDesktopOrLaptop ? <MenuDesktop /> : isMobile ? <PersistentDrawerLeft/> : null }
    </div>
  )
}