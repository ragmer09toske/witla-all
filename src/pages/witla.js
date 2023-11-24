import { Box, Divider } from '@mui/material'
import React from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import useIsDesktop from '../hooks/Device'
// import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/footer'
import  Walpaper from '../Assets/traditional.jpeg'
import  pictureBannerWalpaper from '../Assets/melamu.jpeg'
import { PictureBanner } from '../components/pictureBanner'

export const Witla = () => {
  const isDesktop = useIsDesktop()
  // const navigate = useNavigate()
  // const handleSummit = () => {
  //   navigate("/summit")
  // }
  return (
    <Box>
        <DefaultNav />
        <Banner wallpaper={Walpaper}/>
        <Box>
            <PictureBanner title={"ABOUT WITLA"} bannerPicture={pictureBannerWalpaper}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>Indroduction</b>
                 <br/>
                 <br/>
                  Women in Tourism Lesotho Association (WITLA) is a women-owned association established in August 2022 and legally registered in February 2023 under the Societies Act of Lesotho. Our association comprises over 200 members, all of whom are women owning and operating businesses in various tourism sub-sectors within Lesotho.
                </p>
            </Box>

            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>Our Vision</b>
                 <br/>
                 <br/>
                  Our vision is to empower women in tourism, enabling them to fully participate in economic activities that result in job creation and contribute to stable societies and communities.
                </p>
            </Box>

            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>Our Objectives</b>
                </p>
                 <ul>
                  <li>Strengthen, coordinate, and focus on achieving gender equality in tourism business activities.</li>
                  <li>Serve as a representative body for women in tourism in Lesotho.</li>
                  <li>Facilitate access to information and finance for women in tourism to sustain their businesses.</li>
                  <li>Create business opportunities for women in tourism through decentralized markets.</li>
                 </ul>
            </Box>

            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>Our Value Proposition</b>
                 <br/>
                 <br/>
                 WITLA aims to positively impact the tourism landscape locally and regionally by fostering significant results through lasting relationships, partnerships, and networks built on sound principles of tourism value chains for sustained economic development and growth.
                </p>
            </Box>

            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>Our Values</b>
                 </p>
                 <ul>
                  <li>Constructive Spirit</li>
                  <li>Serve as a representative body for women in tourism in Lesotho.</li>
                  <li>Community & Environment</li>
                  <li>Communication</li>
                  <li>Service Quality</li>
                  <li>Teamwork</li>
                  <li>Loyalty</li>
                  <li>Honesty</li>
                 </ul>
            </Box>
        </Box>
        <Divider />
        <Divider />
        <br/>
        <Footer />
    </Box>
  )
}
