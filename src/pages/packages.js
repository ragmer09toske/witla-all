import { Box, Card, Divider } from '@mui/material'
import React from 'react'
import { Solid } from '../components/solid'
import useIsDesktop from '../hooks/Device'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Footer } from '../components/footer'
import  Walpaper from '../Assets/Wallpapers/nucleus-afriski.jpg'
import CarouselSection from '../components/Navbars/Carousel/Carousel'

export const Packages = () => {
    const isDesktop = useIsDesktop()
    const packageList = [
      {
        package:"International", 
        price: '$ 30'
      },
      {
        package:"Local", 
        price: 'M 500'
      },
    ]
    const packageList2 = [
      {
        package:"Category 1", 
        price: 'M 200.00'
      },
      {
        package:"Category 2", 
        price: 'M 500.00'
      },
      {
        package:"Category 3", 
        price: 'M 1500.00'
      },
    ]
    const GalaDinnerList = [
        {
          package:"General Tickets", 
          price: 'M500.00'
        },
        {
          package:"Vip Ticket", 
          price: 'M1, 000.00'
        },
        {
          package:"Corporate Tickets (10 seats)", 
          price: 'M14, 000.00'
        },
      ]
    return (
    <Box>
        <DefaultNav />
        <Banner  wallpaper={Walpaper}/>
        <CarouselSection />
        <Box sx={{
            p: 2,
        }}
        id="ConferencePricing"
        >
            
        <Card sx={isDesktop ? 
            {p: 3, display:"flex", justifyContent: "space-evenly",flexDirection: "column", gap: 2 }
            : 
            {p: 3, display:"flex", justifyContent: "space-evenly", flexDirection: "column", gap: 2}}
            className="pricing"
        >
            <Box>
                <h2 style={{fontWeight: 600}}>
                <b>Conference Packages And Pricing</b>
                </h2>
            </Box>
            <Solid header="Gala Dinner Ticket Prices" packageList={GalaDinnerList}/>
            <Solid header="ATTADENCE FEES" packageList={packageList}/>
            <Card sx={{
                background: "#2C3039",
                borderRadius: 2,
                color: "#fff"
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center" 
                }}>
                    <h4>EXPO PRICES</h4>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    pl: 3,
                    pr:3,
                    p: 3
                }}>
            <table style={{ width: '100%', tableLayout: 'fixed', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ width: '33%', textAlign: 'left' }}></th>
                    <th style={{ width: '33%', textAlign: 'left' }}>Local</th>
                    <th style={{ width: '34%', textAlign: 'left' }}>International</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>General - No Branding</td>
                    <td>`M 500`</td>
                    <td>$ 53</td>
                </tr>
                <br/>
                <br/>
                <tr>
                <td>Middle - Minimum Branding</td>
                    <td>M 2000</td>
                    <td>$ 264</td>
                </tr>
                <br/>
                <br/>
                <tr>
                    <td>Prime - Full Branding</td>
                    <td>M 5000</td>
                    <td>$ 528</td>
                </tr>
                <br/>
                </tbody>
            </table>
                </Box>
            </Card>
            <Solid header="FOOD STALLS" packageList={packageList2}/>
        </Card>
        </Box>
        <br/>
        <Divider/>
        <Divider/>
        <br/>
        <Footer />
    </Box>
  )
}
