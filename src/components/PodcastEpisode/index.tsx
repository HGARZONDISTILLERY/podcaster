import React, { FC } from "react";

import { Box, Card, Grid, Typography } from "@mui/material";
import { TPodcastList } from "../../types/podcast.api";
import { useLocation } from "react-router-dom";
import PodcastHeader from "../PodcastHeader";
import PodcastDetailCard from "../PodcastDetailCard";

const PodcastEpisode: FC<{}> = () => {
  const { state } = useLocation();

  console.log('state', state)

  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: "30px" }}>
      <PodcastHeader isLoading={state.isLoading} />
      <Grid container spacing={2}>
        <PodcastDetailCard podcast={state?.podcast} />
        <Grid item md={8}>
          <Card sx={{
          padding: '20px'
        }}>
            <Typography variant="subtitle1"><strong>{state?.episode?.trackName}</strong></Typography>
            <Typography variant="body1" sx={{marginBottom: '20px'}}><i>{state?.episode?.shortDescription}</i></Typography>
              <audio controls src={state?.episode?.episodeUrl}></audio>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PodcastEpisode;
