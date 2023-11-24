import React from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Box, Card } from '@mui/material'
import qr from "../Assets/qr.jpeg"
import { IosShareRounded } from '@mui/icons-material'
export const Accomodation = ({numbers,email,name}) => {
  return (
    <div>
        <DefaultNav />
        <Banner />
        <Box>
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <p>QR Quote for accommodation</p>
          </Box>
          <Box sx={{
            pt: 2,
            display: "flex",
            justifyContent: "center"
          }}>
            <img src={qr} alt='qr-code' width={170}/>
          </Box>
          <Box sx={{
            p:5
          }}
          >
            <Card sx={{
              width: "100%",
              height: "100px",
              borderRadius: 3
            }}
            className='topBannerAccomodation'
            >
              <Box sx={{
                color: "White"
              }}
              className="bannerOverlay"
              >
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}>
                  <p>Accomodations</p>
                  <Box sx={{color: "#0008fff3", mt: -4}}>
                      <h4>Booking.com</h4>
                  </Box>
                  <Box sx={{mt: -2}}>
                    <a href='https://www.Booking.com'>
                      <IosShareRounded />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
    </div>
  )
}
