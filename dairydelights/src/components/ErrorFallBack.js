import { Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import {useErrorBoundary} from 'react-error-boundary'
const ErrorFallBack = ({error}) => {
    const {resetBoundary}=useErrorBoundary();
  return (
    <Grid2 container  direction={'column'} 
    alignItems={'center'}>
      <Grid2 m={'10vh'} textAlign={'center'}>
        <Typography>Something went wrong. Try after sometime</Typography>
        <Typography  color='red'>{error.message}</Typography>
        <Button variant='contained' onClick={resetBoundary}>Try again</Button>
      </Grid2>
    </Grid2>
  )
}

export default ErrorFallBack