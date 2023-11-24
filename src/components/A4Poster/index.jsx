import React, { useState } from 'react'
import tours from "../../Assets/tours.jpeg"
import galadinner from "../../Assets/galadinner.jpeg"
import { Box } from '@mui/material'
import useIsDesktop from '../../hooks/Device'
import { A4model } from './A4model'
export const A4Poster = () => {
  const [A4Model, setA4Model] = useState(false)
  const isDesktop = useIsDesktop()
  const [poster,setPicture] = useState()

  const handleTour = () => {
    setPicture(tours)
    setA4Model(!A4Model)
    window.scrollTo({
        top: 0,
        behavior: "smooth" // You can also use "auto" for instant scrolling
    });
  }
  const handleGaladinner = () => {
    setPicture(galadinner)
    setA4Model(!A4Model)
    window.scrollTo({
        top: 0,
        behavior: "smooth" // You can also use "auto" for instant scrolling
    });
  }
  return (
    <Box className="A4Poster-container">
        {A4Model && (<A4model A4Model={A4Model} poster={poster} setA4Model={setA4Model} />)}
        <Box sx={{display: "flex", justifyContent:"center", alignItems: 'center'}} className="A4Poster">
            <Box className="A4PosterImages">
                <img onClick={handleTour} src={tours} alt='witla tours' width={!isDesktop ? (163) : (283)} />
                <img onClick={handleGaladinner} src={galadinner} alt='witla tours' width={!isDesktop ? (173) : (300)} />
            </Box>
        </Box>
        <Box className='blackfilter'/>
    </Box>
  )
}
