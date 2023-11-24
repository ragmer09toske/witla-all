import { Box} from '@mui/material'
import React from 'react'
import logo from "../../Assets/Wallpapers/Witla.png"    
import logos from "../../Assets/steakholders.png"
import { useNavigate } from 'react-router-dom'

export const BannerNav = () => {
  const navigate = useNavigate()
  const toHome = () => {
    navigate("/")
  } 
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 3,
        alignItems: "center"
      }}
        className='orbitron'
    >
        <Box onClick={toHome}>
            <img src={logo} alt="" width={100}></img>
        </Box>
        <Box sx={{color: "#F1B910"}}>
            <img src={logos} alt='witla steakholders' width={300}></img>
            <Box sx={{
              display:"flex",
              flexDirection: "column",
            }}>
              <p style={{fontWeight: 900, fontSize:14}} className='orbitron'>MASERU, LESOTHO | CONVENTION CENTER</p>
              <Box sx={{mt: -3}}>
                <p style={{fontWeight: 900, fontSize:14, color: "#bc0026"}} className='orbitron'>Event dates: 27-29 Nov</p>
              </Box>
            </Box>
        </Box>
    </Box>
  )
}
 