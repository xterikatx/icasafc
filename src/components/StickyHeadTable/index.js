import React from 'react';
import { useMediaQuery } from 'react-responsive'

import Desktop from './tabela';
import Mobile from './tabelamob';

export default function Menu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 800px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <div>
      {isDesktopOrLaptop ? <Desktop /> : isMobile ? <Mobile/> : null }
    </div>

  )
}
