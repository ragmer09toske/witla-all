import { Box } from '@mui/material'
import React from 'react'
import useIsDesktop from '../../hooks/Device'

export const A4model = ({A4Model, setA4Model, poster}) => {
  const isDesktop = useIsDesktop()
  const CloseModel = () => {
    setA4Model(!A4Model)
  }
  const height = window.innerHeight
  return (
    <Box className="A4model" sx={isDesktop && {mt:-100}}>
        <Box sx={!isDesktop ? ({color: "white",display: "flex", alignItems: "center", justifyContent: "center", height: height, }) : ({color: "white",display: "flex", alignItems: "center", justifyContent: "center", height: height,mt: 60 }) }>
            <Box>
                <h4 onClick={CloseModel}>X</h4>
                <img src={poster} alt='witla tours' width={!isDesktop ? (363) : (353)} />
            </Box>
        </Box>
    </Box>
  )
}