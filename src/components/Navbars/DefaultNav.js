import { Box } from '@mui/material'
import React from 'react'
import { BannerNav } from './bannerNav'
import { MainNav } from './MainNav'
import { ExtraNav } from './extraNav'
import useIsDesktop from '../../hooks/Device'
import { MobileNav } from './MobileNav'

export const DefaultNav = () => {
  const isDesktop = useIsDesktop()
  return (
    <>
    { 
      isDesktop ?
      (<Box>
          <BannerNav />
          <MainNav />
          <ExtraNav />
      </Box>)
      :
      (<MobileNav />)
    }
    </>
  )
}
