import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import {useState} from 'react';
import TempPlaylistData from '../TempPlaylistData';

const PlaylistArea = () => {

    const [playlistData, setPlaylistData] = useState(TempPlaylistData);

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
          {playlistData.map((currentPlaylist) => {
            return (
              <Grid justifyContent="center" style={{display: "flex"}}>
                <Button variant="h6">{currentPlaylist.PlaylistName}</Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    )
}

export default PlaylistArea;