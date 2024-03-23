import React from 'react'

import { Box, TextField } from '@mui/material'
import { usePodcasts } from '../../../api/podcast.api';
import PodcastList from '../../PodcastList/podcastList';
import { TPodcastList } from '../../../types/podcast.api';
import PodcastHeader from '../../PodcastHeader/podcastHeader';

const Root: React.FC<{}> = () => {
  const { data: podcastData, isLoading, error } = usePodcasts();
  console.log('podcastData', podcastData)
  const [filteredPodcasts, setFilteredPodcasts] = React.useState<TPodcastList>(podcastData as TPodcastList)

  const filterPodcasts = (value: string): void => {
    const filterValue = value

    if (podcastData && podcastData.length) {
      if (filterValue !== '') {
        const filteredPodcasts: any = podcastData.filter((podcast: any) => {
          return (
            podcast?.title?.label.includes(filterValue) ||
            podcast?.['im:artist']?.label.includes(filterValue)
          )
        })
        setFilteredPodcasts(filteredPodcasts as TPodcastList)
      } else {
        setFilteredPodcasts(podcastData as TPodcastList)
      }
    } else {
      console.log('Error: no hay datos de podcast disponibles')
    }
  }

  React.useEffect(() => {
    filterPodcasts('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred while loading the podcast list.</div>;
  }

  return (
    <Box sx={{maxWidth: '800px', margin: '0 auto', padding: '30px'}}>
      <PodcastHeader isLoading={isLoading} podcasts={podcastData as TPodcastList} />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
        }}>
        <Box sx={{
          background: '#1976d2',
          padding: '10px',
          borderRadius: '5px',
          color: '#fff',
          width: '30px',
          textAlign: 'center'
        }}><strong>{filteredPodcasts?.length}</strong></Box>
        <TextField
          id="outlined-basic"
          label="Filter podcasts..."
          variant="outlined"
          sx={{
            width: '300px',
            marginLeft: '20px',
            justifyContent: 'end'
          }}
          onChange={(event) => filterPodcasts(event.target.value)}
        />
      </Box>
      <PodcastList isLoading={isLoading} podcasts={filteredPodcasts} />
    </Box>
  )
}

export default Root