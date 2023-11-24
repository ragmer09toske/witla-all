import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ExtraNav = () => {
  const navigate = useNavigate()
  const toAccomodation = () => {
    navigate("/accomodation")
  }
  return (
    <Box 
        sx={{
            background: '#2E3190',
            p: 2.5,
            color: "white",
            display: "flex",
            zIndex: 1
        }}
        className="Accomodations"
    >
        <Typography onClick={toAccomodation}>
            Accomodations Start changed again
        </Typography>
    </Box>
  )
}
