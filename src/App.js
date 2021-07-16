import { Component } from "react";
import logo from "./logo.svg";
import "@fontsource/roboto";
import { Grid, Button, Typography, Card } from "@material-ui/core";
import "./App.css";
import tempCover from './assets/temp-cover.jpeg';

import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class App extends Component {
  state = {
    playButton: false,
  };

  togglePlayButton = () => {
    this.setState({ playButton: !this.state.playButton });
  };

  render() {
    return (
      <Grid
        container
        className='App container-mx-height'
        justifyContent='center'
        alignItems='center'
        style={{flexDirection: "column"}}
      >
        <Grid
          item
          alignContent='center'
          alignItems='center'
          justifyContent='center'
          style={{ display: "flex"}}
        >
          <Grid item>
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              style={{ width: 80, height: 80 }}
            />
          </Grid>
          <Button item onClick={this.togglePlayButton}>
            {this.state.playButton ? (
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
        <Grid item flexDirection="row" alignItems="center" style={{display: "flex"}}>
        <img src={tempCover} style={{width: 50, height: 50, margin: "0 10px"}}></img>
        <Typography style={{fontSize: 24}}>
              Playing: Flume - The Difference (Extended Version)
        </Typography>
        </Grid>
      </Grid>
    );
  }
}
