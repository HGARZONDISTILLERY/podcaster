import React, { FC } from 'react'

import { Box } from '@mui/material'
import { usePodcasts } from '../../../api/podcast.api';
import PodcastList from '../../PodcastList/podcastList';
import { TPodcastList } from '../../../types/podcast.api';
import PodcastHeader from '../../PodcastHeader/podcastHeader';

const Root: FC<{}> = () => {
  const { data: podcastData, isLoading, error } = usePodcasts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred while loading the podcast list.</div>;
  }

  console.log('data', podcastData)

  return (
    <Box sx={{maxWidth: '800px', margin: '0 auto', padding: '30px'}}>
      <PodcastHeader isLoading={isLoading} podcasts={podcastData as TPodcastList} />
      <PodcastList isLoading={isLoading} podcasts={podcastData as TPodcastList} />
    </Box>
  )
}

export default Root