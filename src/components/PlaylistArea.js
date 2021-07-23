import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import {useState, useEffect} from 'react';
import TempPlaylistData from '../TempPlaylistData';
import axios from 'axios';

const PlaylistArea = () => {

    const [playlistData, setPlaylistData] = useState(TempPlaylistData);

    useEffect(() => {

      // cors - security measure to consider.
      axios.get('localhost:8080/playlists').then((response)=>{
      alert();
      });

    }, [])

    return (
        <Grid
        item
        className="playlist-area-container"
        style={{padding: 20}}
      >
        <Grid item>
          <Typography variant="h4" style={{paddingTop: 20, paddingBottom: 20}}>
            Playlists
          </Typography>
        </Grid>
        <Grid item>
          {playlistData.items.map((currentPlaylist) => {
            return (
              <Grid justifyContent="center" style={{display: "flex"}}>
                <Button variant="h3" style={{color: "white"}}>{currentPlaylist.name}</Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    )
}

export default PlaylistArea;