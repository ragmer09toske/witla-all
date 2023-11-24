import React from 'react'
import { DefaultNav } from '../components/Navbars/DefaultNav'
import { Banner } from '../components/banner.js'
import { Box, Divider } from '@mui/material'
import useIsDesktop from '../hooks/Device'
import Mohale from "../Assets/mohale.jpeg"
import LandScape from "../Assets/landScape.jpeg"
import { Footer } from '../components/footer'
import { PictureBanner } from '../components/pictureBanner'
import  Walpaper from '../Assets/mokhibo.jpeg'
import  pictureBannerWalpaper from '../Assets/pere.jpeg'
import  River from '../Assets/river.jpeg'
import  sunset from '../Assets/sunset.jpeg'
import  afriski from '../Assets/Wallpapers/nucleus-afriski.jpg'
import  dam from '../Assets/dam.jpeg'
import  houses from '../Assets/houses.jpeg'

export const Summit = () => {
  const stakeHolders = [
    "SADC Secretariat",
    "Ministry of Tourism",
    "Regional Ministries of Women",
    "Tourism Boards and Associations",
    "South Africa Women Association",
    "Women in Tourism South Africa",
    "South Africa Provincial Tourism Boards",
    "UNWTO",
    "AU-APRM",
    "AfCTA",
    "Women of Value Southern Africa",
    "Regional Women Association",
    "Government Agencies",
    "Airlines",
    "Financiers",
    "Private Sectors (Regional Businesses)",
    "SMMEs / Co-ops",
    "Academic Institutions",
    "Business Associations",
    "Exhibitors",
    "Key Stakeholders and Sponsors"
  ]
  const isDesktop = useIsDesktop()
  return (
    <Box>
        <DefaultNav />
        <Banner  wallpaper={Walpaper}/>
        <Box>
        <PictureBanner title={"ABOUT LESOTHO"} bannerPicture={pictureBannerWalpaper}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                <p>
                 <b>About the Summit</b>
                 <br/>
                 <br/>
                 WITSA in partnership with WITLA and the Government of Lesotho through its agency the Lesotho Tourism Development Corporation (LTDC) will be hosting its 2nd Edition of the Women in Tourism Annual Summit and Expo. The 2023 three Days Summit is scheduled to take place in Maseru, Lesotho from the 27th to 29th of November 2023 at the ‘Manthabiseng Convention Centre. 
                </p>
            </Box>
            <PictureBanner bannerPicture={LandScape}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
              <p>
              The 3 days summit will bring together leaders from SADC, the entire Africa and beyond; development partners; intergovernmental organizations; private sector; academia; civil society organizations; women and youth to design and catalyze actions and solutions for tourism development by providing a platform to deliberate on the nexus between technology, women and youth empowerment, entrepreneurship, business development, mentorship and the need to push for increased investment in tourism development in Africa. These will be achieved through Stakeholders’ Engagement Sessions, Leadership Debates, Regional Women in Tourism Fashion Show, Plenary Sessions, B2B, Exhibitions, Excursions, Culture and Heritage Celebration to name the few.
              </p>
            </Box>

            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
              <p>
              The Summit is envisioned to host approximately 1,500 delegates and will to be attended by Women in Business, Local & International Buyers, Exhibitors, Dignitaries, Honourable Ministers of (Tourism, Trade, Gender, etc.) Investors, Business Leaders, Tourism Boards Directors, SADC Secretariat Directors, AU-APRM Executives, Corporate Executives and Managers, Financial Institutions, Academia's, etc.
              </p>
            </Box>
            <PictureBanner bannerPicture={Mohale}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
              <p>
              In partnership with B-Leisure Africa, the organization that focuses on Business & Leisure Inter-Africa Trade & Investment programmes, the summit will host a VIP Business Lounge which will focus on B2B Meetings, Investment Projects Information Sharing Session and investment site seeing as a side event.
              </p>
            </Box>

            <PictureBanner title={"Objectives of the Summit"} bannerPicture={River}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                 <ul>
                  <li>Gather key Tourism Stakeholders together and discuss key issues around tourism business development with a view to empower Women and Youth in tourism.</li>
                  <li>Create opportunities for businesses in the tourism sector’s value chain to exhibit  their products and services.</li>
                  <li>Create a platform for dialogues around current and future plans that will contribute towards the sustainability of the tourism sector.</li>
                  <li>Recognise and celebrate women and all other tourism stakeholders, though Recognition Awards, on the the pivotal role they play in promoting tourism in the southern region.</li>
                  <li>Create awareness on SADC Industrialisation programme with the focus on women in the southern- African Region.</li>
                 </ul>
            </Box>
            <PictureBanner title={"The Event Format"} bannerPicture={sunset}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:0, pb:3,fontSize:30, textAlign:"justify"} : {p:3, pt:1, textAlign:"justify"}}>
              <p>
              <b>The Summit</b>
              </p>
            </Box>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3,pt:0, textAlign:"justify"}}>
              <p>
              As a derivative of the objectives, the summit seeks to gather professionals across a range of business sectors to jointly initiate important, inspiring new ideas that benefit the entire business fratenity. This will be a platform for experienced professionals, entrepreneurs and budding business operators  who seek  business success and would like to meet like-minded peers in order to discuss how best they can  achieve their sustainable business goals. This part of the event will include presentations, discussions panels, interactive breakout sessions, group conversations, networking sessions, women lead project site tours, investment sites seeing and VIP lounge. 
              </p>
            </Box>
            <PictureBanner title={"Event Topics"} bannerPicture={afriski}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3, textAlign:"justify"}}>
                 <ul>
                  <li>Community Based Tourism, Entertainment Tourism </li>
                  <li>Identification of the Current State of Women in Tourism (challenges and what they are currently doing including discussions on issues around tourism and human trafficking). </li>
                  <li>Cross-border tourism  - representatives from the SADC region to make a presentations </li>
                  <li>Entrepreneurship & Mentorship</li>
                  <li>Promotion of Intra-Regional Tourism Trade & Investment Opportunities </li>
                  <li>Rebranding and Marketing Southern Africa Regional Tourism (Boundless SA, e-visa, Borderless Africa)</li>
                  <li>Technology Trends in  Tourism Industry – Use of tech to market tourism businesses </li>
                  <li>Access to Finance (Investment, equity finance, insurance)</li>
                  <li>Niche Tourism Value Chain Sector Opportunities: B-leisure, Creative Tourism, Agri-Tourism, Sports, Beauty & health Tourism and Religious & Pilgrimage Tourism</li>
                 </ul>
            </Box>

            <PictureBanner title={"Exhibitions"} bannerPicture={dam}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3,pt:0, textAlign:"justify"}}>
              <p>
              Business operators including small and medium enterprises will be offered an opportunity to display their products and communicate their ideas to a new audience. Included in this component are B2B meetings and exhibitions. Excursions
              </p>
              <p>
              For those who would want to explore some parts of the beautiful kingdom in the sky, including Maseru city and experience Basotho’s social and cultural lifestyles and enjoy the tranquility and granduer Lesotho offers, there will also be excursions.  
              </p>
            </Box>
            
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3,pt:0, textAlign:"justify"}}>
              <p>
              <b>Book yourself a seat for an inspiring 3 day learning and networking occasion where you will get to:</b>
              </p>
              <ul>
                <li>Be part of the dialogues and learn about trade and investment opportunities</li>
                <li>Network with local and international buyers and investors</li>
                <li>increase the visibility of your brand and products </li>
                <li>Entrepreneurship & Mentorship</li>
                <li>Share your experiences through media interviews</li>
                <li>Learn  and find business development support and opportunities</li>
                <li>Technology Trends in  Tourism Industry – Use of tech to market tourism businesses </li>
                <li>Experience local culture and tourism, and</li>
                <li>Find strategic partners for your business.</li>
              </ul>
            </Box>
            <PictureBanner title={"Strategic Partners and Stakeholders"} bannerPicture={houses}/>
            <Box sx={isDesktop ? {pl:20,pr:20, pt:3, pb:3,fontSize:30, textAlign:"justify"} : {p:3,pt:0, textAlign:"justify"}}>
              {stakeHolders.map((item,index)=>(
                <Box key={index}>
                  <h6>{item}</h6>
                </Box>
              ))}
            </Box>
        </Box>
        <br/>
        <Divider />
        <Divider />
        <br/>
        <Footer />
    </Box>
  )
}
