import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Button } from "@material-ui/core";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SongData from "./SongData";

let player; 
window.onSpotifyWebPlaybackSDKReady = () => {
  //player = new Spotify.Player({name : "myPlaylistProject"});
}

const MusicPlayer = ({ selectedPlaylist }) => {
  const [playButton, setPlayButton] = useState(true);
  const [populatedTrackList, setPopulatedTrackList] = useState([{}]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  console.log(selectedPlaylist);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/playlists/${selectedPlaylist.id}`)
      .then((res) => {
        let playlistData = res.data.tracks.items;
        playlistData = playlistData.map(({ track }, index) => {
          const { id, name, album } = track;
          const { images } = album;
          return { id, name, images };
        });
        console.log(playlistData);
        setPopulatedTrackList(playlistData);
      });
  }, [selectedPlaylist]);

  const togglePlayButton = () => {
    setPlayButton(!playButton);
  };

  return (
    <>
      <Grid item className='music-player-inner-flex-container'>
        <Grid item>
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className='music-player-selection-button'
            onClick={() => {setCurrentTrackIndex(currentTrackIndex - 1)}}
          />
        </Grid>
        <Button item onClick={togglePlayButton}>
          {playButton ? (
            <FontAwesomeIcon
              icon={faPauseCircle}
              spacing={10}
              className='music-player-play-pause'
              style={{ margin: "40px" }}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faPlayCircle}
              spacing={10}
              className='music-player-play-pause'
              style={{ margin: "40px" }}
            ></FontAwesomeIcon>
          )}
        </Button>
        <Grid item>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className='music-player-selection-button'
            onClick={() => {
              setCurrentTrackIndex(currentTrackIndex + 1);
            }}
          />
        </Grid>
      </Grid>
      <SongData data={populatedTrackList[currentTrackIndex]}/>
    </>
  );
};

export default MusicPlayer;
