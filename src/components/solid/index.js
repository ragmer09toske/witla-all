import React from 'react'
import { Box, Card } from '@mui/material'
export const Solid = ({header,packageList}) => {
  return (
    <Card sx={{
        background: "#2C3039",
        borderRadius: 2,
        color: "#fff"
    }}>
        <Box sx={{
            display: "flex",
            justifyContent: "center" 
        }}>
            <h4>{header}</h4>
        </Box>
        <Box>
            {packageList.map((item,index)=>(
                <Box key={index} sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    pl: 5,
                    pr: 5,
                }}> 
                    <Box>
                        <h4>{item.package}</h4>
                    </Box>
                    <Box>
                        <h4>{item.price}</h4>
                    </Box>
                </Box>
            ))}
        </Box>
    </Card>
  )
}
