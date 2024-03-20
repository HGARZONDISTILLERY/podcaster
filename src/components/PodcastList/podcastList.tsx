import React, { FC } from 'react';
import { Grid, Card, Typography } from '@mui/material';
import { TPodcastList } from '../../types/podcast.api';
import { Link } from 'react-router-dom';

interface Props {
  podcasts: TPodcastList;
  isLoading: boolean
}

const PodcastList: FC<Props> = ({ podcasts, isLoading }) => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        marginTop: '40px'
      }}
    >
      {podcasts?.map((podcast) => (
        <Grid
          item
          md={3}
          key={podcast.id.attributes['im:id']}
          sx={{
            textAlign: 'center'
          }}
          >
          <Link
            to={{
              pathname: `/podcast/${podcast.id.attributes['im:id']}`,
            }}
            state={{ podcast, isLoading }}
            style={{
              textDecoration: 'none',
              display: 'block'
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
              <Card
                sx={{
                  padding: '5px',
                  position: 'relative',
                  top: '-70px',
                  zIndex: '-1',
                  textAlign: 'center',
                  paddingTop: '80px',
                  height: '120px'
                }}
              >
                <Typography variant='body2'>{podcast.title.label}</Typography>
                <Typography color='GrayText' variant='caption'>
                  Author: {podcast['im:artist'].label}
                </Typography>
              </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default PodcastList;