import React, { FC } from "react";
import { Grid, Card, Box, Typography } from "@mui/material"; // Importa los componentes necesarios de Material-UI
import { TPodcast } from "../../types/podcast.api";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  podcast: TPodcast;
}

const PodcastDetailCard: FC<Props> = ({ podcast }) => {
  const navigate = useNavigate();

  return (
    <Grid item md={4} sx={{ textAlign: "center" }}>
      <Card sx={{ padding: "10px" }}>
        <Link
          to={".."}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img alt={""} src={podcast["im:image"][2].label} />
          <hr />
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" sx={{ marginLeft: "10px" }}>
              <strong>{podcast["im:name"].label}</strong>
            </Typography>
            <Typography variant="caption" sx={{ marginLeft: "10px" }}>
              By: {podcast["im:artist"].label}
            </Typography>
            <hr />
            <Typography>
              <strong>Description</strong>
            </Typography>
            <Typography variant="body2">
              <i>{podcast.summary.label}</i>
            </Typography>
          </Box>
        </Link>
      </Card>
    </Grid>
  );
};

export default PodcastDetailCard;
