import { Component } from "react";
import logo from "./logo.svg";
import "@fontsource/roboto";
import { Grid, Button, Typography, Card } from "@material-ui/core";
import "./App.css";
import PlaylistArea from "./components/PlaylistArea";
import MusicPlayer from "./components/MusicPlayer";
import PlaylistButton from "./components/Buttons/PlaylistButton";
import SongData from "./components/SongData";

export default class App extends Component {
  state = {
    playListArea: false,
  };

  togglePlaylists = () => {
    this.setState({ playListArea: !this.state.playListArea });
  };

  render() {
    return (
      <Grid
        container
        className="App container-mx-height background-gradient app-container-flex"
      >
        {this.state.playListArea ? <PlaylistArea /> : ""}
        <Grid item className="music-player-container-flex">
          <MusicPlayer />
          <PlaylistButton TogglePlaylist={this.togglePlaylists} />
        </Grid>
        <SongData />
      </Grid>
    );
  }
}
