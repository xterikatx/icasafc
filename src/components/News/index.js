import React from 'react';
import { useMediaQuery } from 'react-responsive'

import NewsDesktop from './news';
import News from './newsmob';

export default function Menu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div>
      {isDesktopOrLaptop ? <NewsDesktop /> : isMobile ? <News/> : null }
    </div>

  )
}
