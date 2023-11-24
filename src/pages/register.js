import React, { useEffect, useState } from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Box, Button, TextField } from '@mui/material'
import  Walpaper from '../Assets/sunset.jpeg'
import { Footer } from '../components/footer'
export const Register = () => {
  const ToTicketBox = () => {
    window.location.href ="https://www.ticketbox.co.ls/events/2nd-witsa-summit-expo"
  }
  const [registeration, setRegistration] = useState()
  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [JobTitle, setJobTitle] = useState()
  const [company, setComapny] = useState()
  const [address, setAddress] = useState()
  const [city,setCity] = useState()
  const [Country, setCountry] = useState()
  const [Phone, setPhone]= useState()

  useEffect(()=>{
    if(name && lastName && JobTitle && company && address && city && Country && Phone && registeration){
      localStorage.setItem("registration",true)
    }
  },[name,lastName,JobTitle,company,address,city,Country,Phone, registeration])

  const handelRegiterForm = () => {
    localStorage.removeItem("registration")
    setRegistration(false)
  }
  return (
    <Box>
        <DefaultNav />
        <Banner wallpaper={Walpaper} />
        {!localStorage.getItem("registration") && (<Box className="pricing" sx={{p:5}}>
          <h5>Fill in all the fields</h5>
          <form action="https://formsubmit.co/info@witla.co.ls" method="POST">
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2
            }}>
              <TextField name='First Name' onChange={(e)=>setName(e.target.value)} required label="First Name"/>
              <TextField name='Last Name' onChange={(e)=>setLastName(e.target)} required label="Last Name" />
              <TextField name='Email' onChange={(e)=>setLastName(e.target)} required label="Email" />
              <TextField name='Job Title' onChange={(e)=>setJobTitle(e.target)} required label="Job Title"/>
              <TextField name='Company' onChange={(e)=>setComapny(e.target.value)} required label="Company"/>
              <TextField name='Address' onChange={(e)=>setAddress(e.target.value)} required label="Address"/>
              <TextField name='District/City' onChange={(e)=>setCity(e.target.value)} required label="District/City"/>
              <TextField name='Country//Region' onChange={(e)=>setCountry(e.target.value)} required label="Country/Region"/>
              <TextField name='Business Phone' onChange={(e)=>setPhone(e.target.value)} type='number' required label="Business Phone"/>
            </Box>
            <br/>
            <Button  type='submit' onClick={()=>setRegistration(true)} variant='contained' fullWidth  >
              Register
            </Button>
          </form>
        </Box>)}
        {localStorage.getItem("registration") && (
          <Box sx={{display:"flex", justifyContent:"center"}} onClick={ToTicketBox}>
            <Box sx={{
                background: "#2e3190f3",
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
              <h4>Get Tickets</h4>
            </Box>
          </Box>
        )}
        {localStorage.getItem("registration") && (
          <>
            <Box sx={{
              display: "flex",
              justifyContent: "center"
            }}>
              <h4>You are registered</h4>
            </Box>
            <br/>
            <br/>
            <Footer />
          </>
        )}
    </Box>
  )
}
