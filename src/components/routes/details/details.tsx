
import React, { FC, useEffect, useState } from 'react'
import { Box, Card, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { TPodcastDetails, TPodcastList } from '../../../types/podcast.api'
import PodcastHeader from '../../PodcastHeader/podcastHeader'
import { fetchPodcastDetails } from '../../../api/podcast.api'
import dayjs from 'dayjs'

const PodcastDetails: FC<{}> = () => {
  const { state } = useLocation()
  const [podcastDetails, setPodcastDetails] = useState<TPodcastDetails>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPodcastDetails(state.podcast.id.attributes['im:id'])
      .then(res => {
        setPodcastDetails(res)
      }).catch(e => {
        console.log('error:', e)
      }).finally(() => {
        setLoading(false)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('podcastDetails', podcastDetails)
    console.log('state', state)
  }, [podcastDetails, state])
  
  const calculatePodcastTime = (milliseconds: number) => {
    let totalSeconds = dayjs().diff(milliseconds, 'second')

    const totalHours = Math.floor(totalSeconds/(60*60))
    totalSeconds = totalSeconds - (totalHours*60*60)
    
    const totalMinutes = Math.floor(totalSeconds/60)
    totalSeconds = totalSeconds - (totalMinutes*60) 

    return `${totalMinutes}:${totalSeconds}`
  }

  return(
    <Box sx={{maxWidth: '800px', margin: '0 auto', padding: '30px'}}>
      <PodcastHeader isLoading={loading} podcasts={state.podcastData as TPodcastList} />
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
                    key={p.trackId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Link
                        to={{
                          pathname: `/podcast/${state.podcast.id.attributes['im:id']}/episode/${p.trackId}`,
                        }}
                        state={{ ...state }}
                      >
                        {p.trackName}
                      </Link>
                    </TableCell>
                    <TableCell align="right">{dayjs(p.releaseDate).format('DD/MM/YYYY')}</TableCell>
                    <TableCell align="right">{calculatePodcastTime(p.trackTimeMillis)}</TableCell>
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