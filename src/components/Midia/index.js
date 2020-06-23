import React from 'react';
import { useMediaQuery } from 'react-responsive'

import Desktop from './midia';
import Mobile from './midiamob';

export default function Menu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div>
      {isDesktopOrLaptop ? <Desktop /> : isMobile ? <Mobile/> : null }
    </div>

  )
}
