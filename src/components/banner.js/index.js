import { Box, Card, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bg from "../../Assets/two.jpeg"
import useIsDesktop from '../../hooks/Device'
import { useNavigate } from 'react-router-dom'

export const Banner = ({wallpaper}) => {
  const isDesktop = useIsDesktop()
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate("/register")
  }
  const [smallDevice, setSmallDeivce] = useState()
  useEffect(()=>{
    if(window.innerWidth <= 360){
        setSmallDeivce(true)
        console.log("small decice set on")
    }
  },[smallDevice])
  const currentWidth = window.innerWidth
  console.log(currentWidth)
  return (
    <Card
        sx={{
            background: "#2e31909e",
            height: 500,
            position: "relative",
            borderRadius: 0
        }}
    >
        <Box 
            sx={{
                background: "#ffffff5a",
                height: 500,
                width: "100%",
                position: "absolute",
                top: 0
            }}
        >
        </Box>
        <img src={!wallpaper ? (bg) : (wallpaper) } style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='nucleus-bg'></img>
        <Box sx={{
            position: 'absolute',
            top: isDesktop ? "50%" : "50%",
            width: "100%",
            mt:{xs: -20},
        }}>
            {!smallDevice && (
            <Box sx={{display: "flex", p:2, pl:3.5}}>
                <Box sx={ isDesktop ? {display:"flex", alignItems:"baseline", mt:-4.5 } : {display:"flex", alignItems:"baseline"}}>
                    <Box>
                        <h1 style={{fontSize: 85, color:"#ad920b"}} className='orbitron'>
                            2
                        </h1>
                    </Box>
                    <Box sx={{position:"absolute",mt:7.2, ml:8.4}}>
                        <h4 style={{color:"#ad920b"}} className='orbitron'>
                            ND
                        </h4>
                    </Box>
                </Box>
                <Box sx={isDesktop ? {ml:5,mt:-1} : {ml:4,mt:5}}>
                    <Box>
                        <h5 style={isDesktop ? {fontSize: 30, color:"#bc0026"} : {fontSize: 20, color:"#bc0026"} } className='orbitron'>WOMAN IN TOURISM SOUTHERN AFRICA</h5>
                    </Box>
                    <Box sx={isDesktop ? {mt: -5} :{mt: -3.5} }>
                        <h5 style={isDesktop ? {fontSize: 20, color:"#bc0026"} : {fontSize: 15, color:"#bc0026"} } className='orbitron'>SUMMIT & EXPO</h5>
                    </Box>
                </Box>
            </Box>
            )}
            {smallDevice && 
            <Box sx={{display: "flex",alignItems:"center" ,p:2, pl:3.5, gap: 1}}>
               <Box>
                   <Box>
                       <h1 style={{fontSize: 85, color:"#ad920b"}} className='orbitron'>
                           2<span style={{fontSize: 40, color:"#ad920b"}}>ND</span>
                       </h1>
                   </Box>
               </Box>
               <Box>
                   <Box>
                       <h5 style={isDesktop ? {fontSize: 30, color:"#bc0026"} : {fontSize: 20, color:"#bc0026"} } className='orbitron'>WOMAN IN TOURISM SOUTHERN AFRICA</h5>
                   </Box>
                   <Box sx={isDesktop ? {mt: -5} :{mt: -3.5} }>
                       <h5 style={isDesktop ? {fontSize: 20, color:"#bc0026"} : {fontSize: 15, color:"#bc0026"} } className='orbitron'>SUMMIT & EXPO</h5>
                   </Box>
               </Box>
           </Box>
            }
            {!smallDevice && (<Box sx={{mt:-12, color: "#fff", pl:4, pr:5, fontWeight:"300"}}>
                <h4 className='ubuntu'style={isDesktop ? {fontSize: 25} : {fontSize:""}}>THEME:{isDesktop && <br/>} ACCELERATING ECONOMIC GROWTH THROUGH TOURISM VALUE CHAINS</h4>
            </Box>)}
            {smallDevice && (<Box sx={{mt:-9, color: "#fff", pl:4, pr:5, fontWeight:"300"}}>
                <h4 className='ubuntu'style={isDesktop ? {fontSize: 25} : {fontSize:""}}>THEME:{isDesktop && <br/>} ACCELERATING ECONOMIC GROWTH THROUGH TOURISM VALUE CHAINS</h4>
            </Box>)}
            {!isDesktop && 
            <Box sx={{pl:4, pr:4}}>
                <Divider sx={{ background:"#00000f5a"}}/>
            </Box>}
            <Box sx={{color: "#F1B910",  pl:4}}>
                <Box sx={{
                display:"flex",
                flexDirection: "column",
                }}>
                <p style={isDesktop ? {fontWeight: 900, fontSize:25} : {fontWeight: 900, fontSize:14} } className='orbitron'>MASERU, LESOTHO | CONVENTION CENTER</p>
                <Box sx={{mt: -3, color:"#bc0026"}}>
                    <p style={isDesktop ? {fontWeight: 900, fontSize:18} : {fontWeight: 900, fontSize:14} } className='orbitron'>27-29 NOVEMBER 2023</p>
                </Box>
                </Box>
            </Box>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center"}} onClick={handleRegister}>
            <Box sx={{
                background: "#F1B910",
                width: 90,
                height:20,
                p:1,
                display:"flex",
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: 30,
                color:"white",
                margin: -7,
                zIndex: 5,
            }}>
                <h4>Register</h4>
            </Box>
        </Box>
    </Card>
  )
}
