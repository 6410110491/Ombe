import React from 'react'
import HomeMobile from './HomeMobile'
import HomeDesktop from './HomeDesktop'

import { useMediaQuery } from 'react-responsive'
function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div>
      <HomeMobile />
    </div>
  )
}

export default Home