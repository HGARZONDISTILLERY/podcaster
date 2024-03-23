import React from "react";
import { Box, TextField } from "@mui/material";

interface Props {
  filterPodcasts: (value: string) => void;
}

const Filter: React.FC<Props> = ({ filterPodcasts }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        justifyContent: "end",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Filter podcasts..."
        variant="outlined"
        sx={{
          width: "300px",
          marginLeft: "20px",
          justifyContent: "end",
        }}
        onChange={(event) => filterPodcasts(event.target.value)}
      />
    </Box>
  );
};

export default Filter;
