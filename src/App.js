import { Component } from "react";
import logo from "./logo.svg";
import "@fontsource/roboto";
import { Grid, Button, Typography, Card } from "@material-ui/core";
import "./App.css";
import PlaylistArea from "./components/PlaylistArea";
import MusicPlayer from "./components/MusicPlayer";
import PlaylistButton from "./components/Buttons/PlaylistButton";
import SongData from "./components/SongData";
import SongList from './components/SongList';
import React from 'react'

export default class App extends Component {
  state = {
    playListArea: false,
    showSongList: false,
    selectedPlaylist : {}
  };

  togglePlaylists = () => {
    this.setState({ playListArea: !this.state.playListArea });
  };

  toggleSongList = () => {
    this.setState({showSongList: !this.state.showSongList});
  }

  setSelectedPlaylist = (playlist) => {
    this.setState({selectedPlaylist: playlist});
  }

  render() {
    console.log(this.state);

    return (
      <Grid
        container
        className="App container-mx-height background-gradient app-container-flex"
      >
        {this.state.playListArea ? <PlaylistArea setSelectedPlaylist={this.setSelectedPlaylist} ToggleSongList={this.toggleSongList}/> : ""}
        {this.state.showSongList ? <SongList/> : ""}
        <Grid item className="music-player-container-flex">
          <MusicPlayer selectedPlaylist={this.state.selectedPlaylist} />
          <PlaylistButton TogglePlaylist={this.togglePlaylists} />
        </Grid>
        <SongData />
      </Grid>
    );
  }
}
