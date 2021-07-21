import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { setState, useState } from "react";

const PlaylistButton = ({ TogglePlaylist }) => {
  return (
    <Grid item flexDirection="column" style={{ display: "flex" }}>
      <Button onClick={TogglePlaylist}>
        <Grid
          style={{
            width: 25,
            height: 25,
            backgroundColor: "black",
            margin: "0 1px",
          }}
          className="br-circle"
        ></Grid>
        <Grid
          style={{
            width: 25,
            height: 25,
            backgroundColor: "black",
            margin: "0 1px",
          }}
          className="br-circle"
        ></Grid>
        <Grid
          style={{
            width: 25,
            height: 25,
            backgroundColor: "black",
            margin: "0 1px",
          }}
          className="br-circle"
        ></Grid>
      </Button>
    </Grid>
  );
};

export default PlaylistButton;
