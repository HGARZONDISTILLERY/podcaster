import { Box, Grid } from '@mui/material'
import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { TPodcastList } from '../../../types/podcast.api'
import PodcastHeader from '../../PodcastHeader/podcastHeader'

const PodcastDetails: FC<{}> = () => {
  const { state } = useLocation()

  console.log(state)
  
  return(
    <Box sx={{maxWidth: '800px', margin: '0 auto', padding: '30px'}}>
      <PodcastHeader isLoading={state.isLoading} podcasts={state.podcastData as TPodcastList} />
      <Grid container spacing={2}>
      <Grid item md={4}>
         test 2
      </Grid>
        <Grid item md={8}>
          test
        </Grid>
    </Grid>
    </Box>
  )
}

export default PodcastDetails