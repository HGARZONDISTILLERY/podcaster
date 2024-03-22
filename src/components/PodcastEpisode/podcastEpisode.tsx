import React, { FC } from 'react'

import { Box } from '@mui/material';
import { TPodcastList } from '../../types/podcast.api';
import { useLocation } from 'react-router-dom';
import PodcastHeader from '../PodcastHeader/podcastHeader';

const PodcastEpisode: FC<{}> = () => {
  const { state } = useLocation()
  
  return (
    <Box sx={{maxWidth: '800px', margin: '0 auto', padding: '30px'}}>
      <PodcastHeader isLoading={state.isLoading} podcasts={state as TPodcastList} />
      test
    </Box>
  );
};

export default PodcastEpisode