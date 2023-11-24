import { Email, Facebook, Instagram, Phone } from '@mui/icons-material'
import { Box, Divider } from '@mui/material'
import kayplayer from "../../Assets/kayplayers.jpeg"
// import Nu_branded from "../../Assets/logo_Typo.png"
// import TP_branded from "../../Assets/tp.jpg"

import React from 'react'

export const Footer = () => {
//   const handleClick =()=>{
//     window.location.href="https://www.nucleusdevs.com"
//   }
//   const toNucleus = () => {
//     window.location.href = "https://www.nucluesdevs.com"
//   }
//   const toTP = () => {
//     window.location.href = "https://www.tp-technologies.co.ls"
//   }
  const handleTicktok = () => {
    window.location.href = "https://ticktock#"
  }
  return (
    <Box sx={{
        position:"relative",
        pt:2
    }}>
        <Divider />
        <Box sx={{
            position: "absolute",
            top: -26,
            pl:1,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.33)",
            display: "flex",
            justifyContent: "center",
            width: "90%"
        }}>
            <h3>Key Stakeholders and Sponsors</h3>
        </Box>
        <Divider />
        <Box>
            <img src={kayplayer} width={"100%"} alt='keyplayers' />
        </Box>
        <Box sx={{
            background: "#2E3190",
            display: "flex",
            justifyContent: 'space-between',
            p:3
        }}
        className="footer"
        >
            <Box>
                <Box sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center"
                }}>
                    <Phone />
                    <h5>
                        +266 62660607
                    </h5>
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center"
                }}>
                    <Email />
                    <h5>
                    info@witla.co.ls
                    </h5>
                </Box>
            </Box>
            <Box>
                <Box>
                    <h5>
                        Find us on
                    </h5>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2
                }}>
                    <Facebook onlcick={handleTicktok}/>
                    <Instagram />
                </Box>
            </Box>
        </Box>
        <Box sx={{
            display: "flex",
            alignItems:"center",
            flexDirection:"column",
            background: "#2e3190f3",
            height:"100px"
        }}
        >
            <Box sx={{color:"white"}}>
            <p>&copy; 2023 witla. All rights reserved.</p>
            </Box>
            {/* <Box sx={{mt:-1}} onClick={toNucleus}>
                <img src={Nu_branded} width={100} />
            </Box> */}
            {/* <br/> */}
            {/* <Box sx={{color:"Black"}}>
                <h4>In Collaboration With</h4>
            </Box> */}
            {/* <Box sx={{mt:-2}} onClick={toTP}>
                <img src={TP_branded} width={100} />
            </Box> */}
        </Box>
        {/* <br/> */}
    </Box>
  )
}
