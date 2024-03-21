
import React, { FC, useEffect, useState } from 'react'
import { Box, Card, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { TPodcastDetails, TPodcastList } from '../../../types/podcast.api'
import PodcastHeader from '../../PodcastHeader/podcastHeader'
import { fetchPodcastDetails } from '../../../api/podcast.api'

const PodcastDetails: FC<{}> = () => {
  const { state } = useLocation()
  const [podcastDetails, setPodcastDetails] = useState<TPodcastDetails>()

  useEffect(() => {
    fetchPodcastDetails().then(res => setPodcastDetails(res))
  }, [])

  useEffect(() => {
    console.log('podcastDetails', podcastDetails)
    console.log('state', state)
  }, [podcastDetails, state])
  
  return(
    <Box sx={{maxWidth: '800px', margin: '0 auto', padding: '30px'}}>
      <PodcastHeader isLoading={state.isLoading} podcasts={state.podcastData as TPodcastList} />
      <Grid container spacing={2}>
      <Grid item md={4} sx={{textAlign: 'center'}}>
         <Card sx={{ padding: '10px' }}>
          <img alt={''} src={state?.podcast['im:image'][2].label} />
          <hr />
          <Box sx={{textAlign: 'left'}}>
            <Typography variant="body1" sx={{ marginLeft: '10px' }}><strong>{state?.podcast['im:name'].label}</strong></Typography>
            <Typography variant="caption" sx={{ marginLeft: '10px' }}>By: {state?.podcast['im:artist'].label}</Typography>
            <hr />
            <Typography><strong>Description</strong></Typography>
            <Typography variant="body2"><i>{state?.podcast.summary.label}</i></Typography>
          </Box>
        </Card>
      </Grid>
        <Grid item md={8}>
          <Card sx={{padding: '20px'}}>
            <Typography variant="body1"><strong>Episodes: {podcastDetails?.resultCount}</strong></Typography>
          </Card>
          <Card sx={{marginTop: '20px'}}>
          <TableContainer component={Paper}>
            <Table sx={{ width: '100%' }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Title</strong></TableCell>
                  <TableCell align="right"><strong>Date</strong></TableCell>
                  <TableCell align="right"><strong>Duration</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {podcastDetails?.results.map((p) => (
                  <TableRow
                    key={'test'}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {p.trackName}
                    </TableCell>
                    <TableCell align="right">{p.releaseDate}</TableCell>
                    <TableCell align="right">{p.trackTimeMillis}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Card>
        </Grid>
    </Grid>
    </Box>
  )
}

export default PodcastDetails