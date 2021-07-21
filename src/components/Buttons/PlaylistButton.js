import React, {useState} from "react";
import { Grid, Button, Typography } from "@material-ui/core";

const PlaylistButton = ({ TogglePlaylist }) => {
  return (
    <Grid item flexDirection="column" style={{ display: "flex"}}>
      <Button onClick={TogglePlaylist}>
        <Grid
          className="br-circle inner-playlist-button-circles"
        ></Grid>
        <Grid
          className="br-circle inner-playlist-button-circles"
        ></Grid>
        <Grid
          className="br-circle inner-playlist-button-circles"
        ></Grid>
      </Button>
    </Grid>
  );
};

export default PlaylistButton;
