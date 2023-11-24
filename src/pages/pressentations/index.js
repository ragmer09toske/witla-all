import { Box, Divider } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import MSU from "../../Assets/lekhowa.png"
import exhibition from "../../Assets/exhibitions.jpg"
import komecaves from "../../Assets/msu.JPG"
import useIsDesktop from '../../hooks/Device'
import { useNavigate } from 'react-router-dom'
import Slideshow from '../../components/banner.js/images'
import { A4Poster } from '../../components/A4Poster'

export const Home = () => {
  const isDesktop = useIsDesktop()
  const navigate = useNavigate()
  const handleSummit = () => {
    navigate("/summit")
  }

  const handleWitla = () => {
    navigate("/witla")
  }
//   const handlePackagesPricing = () => {
//     navigate("/summit#ConferencePricing")
//   }
  const handleExhibitions = () => {
    navigate("/summit#Exhiitions")
  }

  const conferencePricingRef = useRef(null);

  const handlePackagesPricing = () => {
    navigate('/summit');
  };

  useEffect(() => {
    // Scroll to the "ConferencePricing" div after navigating to "/summit"
    if (conferencePricingRef.current) {
      conferencePricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);  // Empty dependency array to run this effect once after mounting

  return (
    <Box>
        <Box>
        <A4Poster/>
        <Slideshow />
        <div style={isDesktop ? { position: 'relative', height:"200px", width:"100%"} : { position: 'relative', height:"100px", width:"100%"}}>
                <img
                    src={MSU}
                    alt="Background"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    }}
                />
                <Box
                    sx={
                    isDesktop ?    
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"80%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }:
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"60%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }
                    }
                >
                    <h4 style={isDesktop ? {color:'white', fontSize:50} : {color:'white', fontSize:30}}>WITLA</h4>
                </Box>
            </div>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>WOMEN IN TOURISM ASSOCIATION LESOTHO</b>
                 <br/>
                 <br/>
                This is a women-owned association established in August 2022 <br/><br/>
                1) Legally registered in February 2023 under the Societies Act of Lesotho<br/><br/>
                2) More than 200 members from all 10 districts <br/><br/>
                3) Members own and operate enterprises in all tourism sub-sectors<br/><br/>
                4) 13 executive members
                </p>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center"}} onClick={handleWitla}>
                <Box sx={{
                    background: "#F1B910",
                    width: 90,
                    height:20,
                    p:1,
                    display:"flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: 30,
                    color:"white"
                }}>
                    <h4>Read more</h4>
                </Box>
            </Box>
            <br/>
            <div style={isDesktop ? { position: 'relative', height:"200px", width:"100%"} : { position: 'relative', height:"100px", width:"100%"}}>
                <img
                    src={komecaves}
                    alt="Background"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    }}
                />
                <Box
                    sx={
                    isDesktop ?    
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"80%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }:
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"60%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }
                    }
                >
                    <h4 style={isDesktop ? {color:'white', fontSize:50} : {color:'white', fontSize:30}}>About the Summit</h4>
                </Box>
            </div>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                WITSA in partnership with WITLA and the Government of Lesotho through its agency the Lesotho Tourism Development Corporation (LTDC) will be hosting its 2nd Edition of the Women in Tourism Annual Summit and Expo. The 2023 three Days Summit is scheduled to take place in Maseru, Lesotho from the 27th to 29th of November 2023 at the ‘Manthabiseng Convention Centre.
                </p>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center"}} onClick={handleSummit}>
                <Box sx={{
                    background: "#F1B910",
                    width: 100,
                    height:20,
                    p:1,
                    display:"flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: 30,
                    color:"white"
                }}>
                    <h4>More Details</h4>
                </Box>
            </Box>
            <br/>
            <br/>
            <div style={isDesktop ? { position: 'relative', height:"200px", width:"100%"} : { position: 'relative', height:"100px", width:"100%"}}>
                <img
                    src={exhibition}
                    alt="Background"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    }}
                />
                <Box
                    sx={
                    isDesktop ?    
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"80%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }:
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"60%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }
                    }
                >
                    <h4 style={isDesktop ? {color:'white', fontSize:50} : {color:'white', fontSize:30}}>Exhibitions</h4>
                </Box>
            </div>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                Business operators including small and medium enterprises will be offered an opportunity to display their products and communicate their ideas to a new audience. Included in this component are B2B meetings and exhibitions.
                </p>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center"}} onClick={handleExhibitions}>
                <Box sx={{
                    background: "#F1B910",
                    width: 90,
                    height:20,
                    p:1,
                    display:"flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: 30,
                    color:"white"
                }}>
                    <h4>Read more</h4>
                </Box>
            </Box>
            <br/>
        </Box>
        <br/>
        <br/>
            <div style={isDesktop ? { position: 'relative', height:"200px", width:"100%"} : { position: 'relative', height:"100px", width:"100%"}}>
                <img
                    src={komecaves}
                    alt="Background"
                    style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    }}
                />
                <Box
                    sx={
                    isDesktop ?    
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"80%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }:
                    {
                    backgroundColor: 'rgba(0, 0, 255, 0.19)', // Adjust the color and opacity
                    padding: '20px', // Add any other styling you need
                    height:"60%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }
                    }
                >
                    <h4 style={isDesktop ? {color:'white', fontSize:40} : {color:'white', fontSize:25}}>Conference Packages And Pricing</h4>
                </Box>
            </div>
            <br/>
            <Box sx={{display:"flex", justifyContent:"center"}} onClick={handlePackagesPricing}>
                <Box sx={{
                    background: "#F1B910",
                    width: 90,
                    height:20,
                    p:1,
                    display:"flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: 30,
                    color:"white"
                }}>
                    <h4>Visit Page</h4>
                </Box>
            </Box>
            <br/>
            <Divider />
            <Divider />
            <br/>
    </Box>
  )
}
