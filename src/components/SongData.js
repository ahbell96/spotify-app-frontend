import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useState } from "react";
import tempCover from "../assets/temp-cover.jpeg";

const SongData = () => {
  return (
    <Grid
      item
      flexDirection="row"
      alignItems="center"
      style={{ display: "flex" }}
    >
      <img
        src={tempCover}
        style={{ width: 50, height: 50, margin: "0 10px" }}
        alt="Album Cover"
      ></img>
      <Typography style={{ fontSize: 24 }}>
        Playing: Flume - The Difference (Extended Version)
      </Typography>
    </Grid>
  );
};

export default SongData;
