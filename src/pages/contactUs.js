import React from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Box, Button, Divider, TextField } from '@mui/material'
import { Footer } from '../components/footer'

export const ContactUs = () => {
  return (
    <div>
        <DefaultNav />
        <Banner />
        <Box className="pricing" sx={{p:5}}>
          <form action="https://info@witla.co.ls" method="POST">
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2
            }}>
              <TextField name='Names' label="First Name"/>
              <TextField name='Email' label="Email" />
              <textarea rows={7} maxLength={250} name='Message' placeholder='Message'/>
            </Box>
            <br/>
            <Button type='submit' variant='contained' fullWidth >
              Send
            </Button>
          </form>
        </Box>
        <Divider/>
        <Divider/>
        <br/>
        <Footer />
    </div>
  )
}
