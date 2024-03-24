import { FC } from 'react'

import { Box, Typography, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const PodcastHeader: FC<{ isLoading: boolean }> = ({ isLoading }) => {
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
        <Typography variant="h1" sx={{ fontSize: '34px', color: '#1976d2', width: isLoading ? '90%' : '100%' }}>
          <Link to='/' style={{textDecoration: 'none', color: '#1976d2'}}>
            Podcaster
          </Link>
        </Typography>
        {isLoading && <CircularProgress sx={{ alignSelf: 'center' }} />}
      </Box>
      <hr />
    </>
  );
};

export default PodcastHeader