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
      className="music-player-inner-flex-container"
    >
      <Grid item>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="music-player-selection-button"
        />
      </Grid>
      <Button item onClick={togglePlayButton}>
        {playButton ? (
          <FontAwesomeIcon
            icon={faPauseCircle}
            spacing={10}
            className="music-player-play-pause"
            style={{margin: "40px"}}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            icon={faPlayCircle}
            spacing={10}
            className="music-player-play-pause"
            style={{margin: "40px"}}
          ></FontAwesomeIcon>
        )}
      </Button>
      <Grid item>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="music-player-selection-button"
        />
      </Grid>
    </Grid>
  );
};

export default MusicPlayer;
