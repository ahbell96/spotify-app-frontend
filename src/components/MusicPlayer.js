import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MusicPlayer = () => {
  const [playButton, setPlayButton] = useState(true);

  const togglePlayButton = () => {
    setPlayButton(!playButton);
  };

  return (
    <Grid
      item
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      style={{ display: "flex" }}
    >
      <Grid item>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          style={{ width: 80, height: 80 }}
        />
      </Grid>
      <Button item onClick={togglePlayButton}>
        {playButton ? (
          <FontAwesomeIcon
            icon={faPauseCircle}
            style={{ width: 250, height: 250, margin: 40 }}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            icon={faPlayCircle}
            style={{ width: 250, height: 250, margin: 40 }}
          ></FontAwesomeIcon>
        )}
      </Button>
      <Grid item>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          style={{ width: 80, height: 80 }}
        />
      </Grid>
    </Grid>
  );
};

export default MusicPlayer;
