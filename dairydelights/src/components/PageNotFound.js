import React from 'react'
import { Grid2,Typography } from '@mui/material'

const PageNotFound = () => {
  return (
    <Grid2 container  direction={'column'} 
    alignItems={'center'} 
    sx={{minHeight:"60vh"}}>   
      <Grid2 >
      <Typography m={'10vh'}fontSize={30} color='red'>
        Page Not Found</Typography>
      </Grid2>
    </Grid2>
 
  )
}

export default PageNotFound