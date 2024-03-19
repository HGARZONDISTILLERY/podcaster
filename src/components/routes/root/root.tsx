import React from 'react'

import { Box, CircularProgress, TextField, Typography } from '@mui/material'
import { usePodcasts } from '../../../api/itunes.api';

const Root = () => {
  const { data, isLoading, error } = usePodcasts();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Ocurrió un error al cargar la lista de podcasts.</div>;
  }

  console.log('data', data)

  return (
    <Box sx={{maxWidth: '800px', margin: '0 auto', padding: '30px'}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%'
        }}
      >
        <Typography variant="h1" sx={{fontSize: '34px', color: '#1976d2', width: '90%'}}>Podcaster</Typography>
        <CircularProgress sx={{ alignSelf: 'center' }} />
      </Box>
      <hr />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end'
        }}
      >
        <TextField 
          id="outlined-basic"
          label="Filter podcasts..."
          variant="outlined"
          sx={{
            width: '300px'
          }} />
      </Box>
    </Box>
  )
}

export default Root