import { Component } from "react";
import logo from "./logo.svg";
import "@fontsource/roboto";
import { Grid, Button, Typography, Card } from "@material-ui/core";
import "./App.css";
import tempCover from "./assets/temp-cover.jpeg";
import TempPlaylistData from "./TempPlaylistData";

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
    playListArea: false,
    playlistData: [],
  };

  togglePlayButton = () => {
    this.setState({ playButton: !this.state.playButton });
  };

  togglePlaylists = () => {
    this.setState({ playListArea: !this.state.playListArea });
  };

  componentDidMount() {
    this.setState({ playlistData: TempPlaylistData });
  }

  render() {
    return (
      <Grid
        container
        className='App container-mx-height'
        justifyContent='center'
        alignItems='center'
        style={{ flexDirection: "column" }}
      >
        {this.state.playListArea ? (
          <Grid
            item
            style={{
              height: "100%",
              backgroundColor: "gray",
              position: "absolute",
              left: 0,
              flexDirection: "column",
              padding: 10,
            }}
          >
            <Grid item>
              <Typography style={{ fontSize: 24, fontWeight: 600 }}>
                Playlists
              </Typography>
            </Grid>
            <Grid item>
              {this.state.playlistData.map((currentPlaylist) => {
                return (
                  <Grid>
                    <Typography>{currentPlaylist.PlaylistName}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        <Grid
          item
          alignContent='center'
          alignItems='center'
          justifyContent='center'
          style={{ display: "flex" }}
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
        <Grid item flexDirection='column' style={{ display: "flex" }}>
          <Button onClick={this.togglePlaylists}>
            <Grid
              style={{
                width: 25,
                height: 25,
                backgroundColor: "black",
                margin: "0 1px",
              }}
              className='br-circle'
            ></Grid>
            <Grid
              style={{
                width: 25,
                height: 25,
                backgroundColor: "black",
                margin: "0 1px",
              }}
              className='br-circle'
            ></Grid>
            <Grid
              style={{
                width: 25,
                height: 25,
                backgroundColor: "black",
                margin: "0 1px",
              }}
              className='br-circle'
            ></Grid>
          </Button>
        </Grid>
        <Grid
          item
          flexDirection='row'
          alignItems='center'
          style={{ display: "flex" }}
        >
          <img
            src={tempCover}
            style={{ width: 50, height: 50, margin: "0 10px" }}
          ></img>
          <Typography style={{ fontSize: 24 }}>
            Playing: Flume - The Difference (Extended Version)
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
