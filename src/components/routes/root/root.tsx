import React from 'react'

import { Box, Card, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import { usePodcasts } from '../../../api/podcast.api';

const Root = () => {
  const { data: podcastData, isLoading, error } = usePodcasts();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Ocurrió un error al cargar la lista de podcasts.</div>;
  }

  console.log('data', podcastData)

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
        <Box>{podcastData?.length}</Box>
        <TextField 
          id="outlined-basic"
          label="Filter podcasts..."
          variant="outlined"
          sx={{
            width: '300px'
          }} />
      </Box>
      <Grid
        container 
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          marginTop: '40px'
        }}>
      {
            podcastData?.map((podcast: any) => (
              <Grid
                item
                md={3}
                sx={{
                textAlign: 'center'
                }}
              >
                <img 
                  alt={podcast.title.label}
                  src={podcast['im:image'][2].label}
                  width='150px'
                  style={{
                    borderRadius: '50%',
                  }}
                />
                <Card sx={{
                  padding: '5px',
                  position: 'relative',
                  top: '-70px',
                  zIndex: '-1',
                  textAlign: 'center',
                  paddingTop: '80px',
                  height: '120px'
                }}>
                  <Typography variant='body2'>{podcast.title.label}</Typography>
                  <Typography color='GrayText' variant='caption'>
                    Author:{' '}
                    {podcast['im:artist'].label}
                  </Typography>
                </Card>
              </Grid>
            ))
          }
      </Grid>
    </Box>
  )
}

export default Root