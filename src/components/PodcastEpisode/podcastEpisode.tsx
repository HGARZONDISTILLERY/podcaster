import React, { FC } from "react";

import { Box, Card, Grid, Typography } from "@mui/material";
import { TPodcastList } from "../../types/podcast.api";
import { useLocation } from "react-router-dom";
import PodcastHeader from "../PodcastHeader/podcastHeader";

const PodcastEpisode: FC<{}> = () => {
  const { state } = useLocation();

  console.log('state', state)

  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: "30px" }}>
      <PodcastHeader isLoading={state.isLoading} />
      <Grid container spacing={2}>
        <Grid item md={4} sx={{ textAlign: "center" }}>
          <Card sx={{ padding: "10px" }}>
            <img alt={""} src={state?.podcast["im:image"][2].label} />
            <hr />
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="body1" sx={{ marginLeft: "10px" }}>
                <strong>{state?.podcast["im:name"].label}</strong>
              </Typography>
              <Typography variant="caption" sx={{ marginLeft: "10px" }}>
                By: {state?.podcast["im:artist"].label}
              </Typography>
              <hr />
              <Typography>
                <strong>Description</strong>
              </Typography>
              <Typography variant="body2">
                <i>{state?.podcast.summary.label}</i>
              </Typography>
            </Box>
          </Card>
        </Grid>
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
