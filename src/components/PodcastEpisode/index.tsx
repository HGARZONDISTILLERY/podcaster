import { FC } from "react";
import parse from "html-react-parser";

import { Box, Card, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import PodcastHeader from "../PodcastHeader";
import PodcastDetailCard from "../PodcastDetailCard";

const PodcastEpisode: FC<{}> = () => {
  const { state } = useLocation();
  const episode = state?.episode;

  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: "30px" }}>
      <PodcastHeader isLoading={state.isLoading} />
      <Grid container spacing={2}>
        <PodcastDetailCard podcast={state?.podcast} />
        <Grid item md={8}>
          <Card
            sx={{
              padding: "20px",
            }}
          >
            <Typography variant="subtitle1">
              <strong>{episode?.trackName}</strong>
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              <i>{episode?.shortDescription}</i>
            </Typography>
            <audio controls src={episode?.episodeUrl}></audio>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PodcastEpisode;
