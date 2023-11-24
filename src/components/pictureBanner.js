import { Box } from "@mui/material"
import MSU from "../Assets/lekhowa.png"
import useIsDesktop from '../hooks/Device'

export const PictureBanner = ({title, bannerPicture}) => {
  const isDesktop = useIsDesktop()
  return (
    <div style={isDesktop ? { position: 'relative', height:"200px", width:"100%"} : { position: 'relative', height:"100px", width:"100%"}}>
                <img
                    src={!bannerPicture ? (MSU) : (bannerPicture)}
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
                    <h4 style={isDesktop ? {color:'white', fontSize:50} : {color:'white', fontSize:30}}>{title}</h4>
                </Box>
            </div>
  )
}
