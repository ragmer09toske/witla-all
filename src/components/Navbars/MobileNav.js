import { Box, Divider} from '@mui/material'
import React, { useState } from 'react'
import logo from "../../Assets/Wallpapers/Witla.png"
import { Close, Menu } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const NavContent = () => {
    const navigate = useNavigate()
    const handleWitla =()=>{
        navigate("/witla")
    }
    const handleLesotho =()=>{
        navigate("/lesotho")
    }
    const handleSummit =()=>{
        navigate("/summit")
    }
    const handleContact =()=>{
        navigate("/contact")
    }
    const handleRegister =()=>{
        navigate("/register")
    }
    const handlePackages =()=>{
        navigate("/packages")
    }
    const handleAccomodations =()=>{
        navigate("/accomodation")
    }
    return (
        <Box>
        <Divider />
            <br />
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                fontWeight:"400px",
                color: "white",
                pl: 2,
                pb: 2
            }}
                className="ubuntu"
            >
                <h4 onClick={handleWitla}>
                    About WITLA
                </h4>
                <h4 onClick={handleLesotho}>
                    About Lesotho
                </h4>
                <h4 onClick={handleSummit}>
                    About Conference
                </h4>
                <h4 onClick={handlePackages}>
                    Packages
                </h4>
                <h4 onClick={handleAccomodations}>
                    Accomodations
                </h4>
                <h4 onClick={handleContact}>
                    Contact us
                </h4>
                <h4 onClick={handleRegister}>
                    Register
                </h4>
                <Divider />
                <h4 style={{
                    fontSize: "10px",
                    color:"#bc0026"
                }}>
                    Event dates: 27-29 Nov
                    MASERU, LESOTHO | Convention Center
                </h4>
            </Box>
        </Box>
    )
}
export const MobileNav = () => {
  const [navContentState, setNavContentState] = useState()
  const navigate = useNavigate()
  const handleCloseContent = () => {
    setNavContentState(false)
  }
  const handleShowContent = () => {
    setNavContentState(true)
  }
  const handleHome =()=>{
    navigate("/")
  }
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        position:"fixed",
        right: 10,
        left: 10,
        zIndex:999
    }}>
        <Box sx={{
            position: 'absolute',
            zIndex: 999,
            width: "90%",
            }}
            className="MobileNav"
        >
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", 
                pr: 2
            }}>
                <Box onClick={handleHome}>
                    <img src={logo} alt='witla' width={80}></img>
                </Box>
                <Box>
                    {   !navContentState &&
                        <Menu sx={{
                        fontSize: "40px",
                        color: "white",
                        }}
                        onClick={handleShowContent}
                        />
                    }

                    {   navContentState &&
                        <Close sx={{
                        fontSize: "40px",
                        color: "white",
                        }}
                        onClick={handleCloseContent}
                        />
                    }
                </Box>
            </Box>
            { navContentState &&
                (<NavContent />)
            }
        </Box>
    </Box>
  )
}
