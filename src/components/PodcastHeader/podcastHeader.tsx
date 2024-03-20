import React, { FC } from 'react'

import { Box, Typography, CircularProgress } from '@mui/material';
import { TPodcastList } from '../../types/podcast.api';
import PodcastFilter from './components/PodcastFilter/podcastFilter';

const PodcastHeader: FC<{ isLoading: boolean, podcasts: TPodcastList }> = ({ isLoading, podcasts }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%'
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '34px', color: '#1976d2', width: isLoading ? '90%' : '100%' }}>Podcaster</Typography>
        {isLoading && <CircularProgress sx={{ alignSelf: 'center' }} />}
      </Box>
      <hr />
      <PodcastFilter podcasts={podcasts as TPodcastList} />
    </>
  );
};

export default PodcastHeader