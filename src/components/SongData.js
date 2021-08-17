import React, {useState} from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import tempCover from "../assets/temp-cover.jpeg";

const SongData = ({data}) => {
  if(Object.keys(data).length == 0)
    return <></>
  return (
    <Grid
      item
      className="song-data-container"
    >
      <img
        src={data.images[0].url}
        className="album-cover"
        alt="Album Cover"
      ></img>
      <Typography variant="h3">
        {data.name}
      </Typography>
    </Grid>
  );
};

export default SongData;
