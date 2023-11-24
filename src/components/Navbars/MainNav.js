import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MainNav = () => {
    const navigate = useNavigate()
    // const toHome = () => {
    //     navigate("/")
    // }
    const toWitla = () => {
        navigate("/witla")
    }
    const toLesotho = () => {
        navigate("/lesotho")
    } 
    const toSummit = () => {
        navigate("/summit")
    }
    const toRegister = () => {
        navigate("/register")
    }
    const toContact = () => {
        navigate("/contact")
    }
    const toPackage = () => {
        navigate("/packages")
    }
  
  return (
    <Box 
        sx={{
            background: '#2E3190',
            p: 2.5,
            color: "white",
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            zIndex: 2
        }}
        className="MainNav"
    >
        <h4 onClick={toWitla} className='ubuntu'>
            About WITLA
        </h4>
        <h4 onClick={toLesotho} className='ubuntu'>
            About Lesotho
        </h4>
        <h4 onClick={toSummit} className='ubuntu'>
            About Conference
        </h4>
        <h4 onClick={toPackage} className='ubuntu'>
            Packages
        </h4>
        <h4 onClick={toContact} className='ubuntu'>
            Contact Us
        </h4>
        <h4 onClick={toRegister} className='ubuntu'>
            Register
        </h4>
    </Box>
  )
}
