import React, { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TPodcastList } from '../../types/podcast.api';

const PodcastFilter: FC<{ podcasts: TPodcastList }> = ({ podcasts }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <Box>{podcasts?.length}</Box>
      <TextField
        id="outlined-basic"
        label="Filter podcasts..."
        variant="outlined"
        sx={{
          width: '300px',
          marginLeft: '20px'
        }}
      />
    </Box>
  )
}

export default PodcastFilter