import { Component } from "react";
import logo from "./logo.svg";
import "@fontsource/roboto";
import { Grid, Button, Typography, Card } from "@material-ui/core";
import "./App.css";
import tempCover from "./assets/temp-cover.jpeg";
import PlaylistArea from "./components/PlaylistArea";
import MusicPlayer from "./components/MusicPlayer";
import PlaylistButton from "./components/Buttons/PlaylistButton";
import SongData from "./components/SongData";

import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class App extends Component {
  state = {
    playListArea: false,
  };

  togglePlayButton = () => {
    this.setState({ playButton: !this.state.playButton });
  };

  togglePlaylists = () => {
    this.setState({ playListArea: !this.state.playListArea });
  };

  render() {
    return (
      <Grid
        container
        className="App container-mx-height"
        justifyContent="center"
        alignItems="center"
        style={{ flexDirection: "column" }}
      >
        {this.state.playListArea ? <PlaylistArea /> : ""}
        <Grid
          item
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <MusicPlayer />

          <PlaylistButton TogglePlaylist={this.togglePlaylists} />
        </Grid>
        <SongData />
      </Grid>
    );
  }
}
