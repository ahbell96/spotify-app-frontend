import React, {useState} from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import tempCover from "../assets/temp-cover.jpeg";

const SongData = () => {
  return (
    <Grid
      item
      className="song-data-container"
    >
      <img
        src={tempCover}
        className="album-cover"
        alt="Album Cover"
      ></img>
      <Typography variant="h3">
        Playing: Flume - The Difference (Extended Version)
      </Typography>
    </Grid>
  );
};

export default SongData;
