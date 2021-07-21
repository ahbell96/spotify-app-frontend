import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import {useState} from 'react';
import TempPlaylistData from '../TempPlaylistData';

const PlaylistArea = () => {

    const [playlistData, setPlaylistData] = useState(TempPlaylistData);

    return (
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
          {playlistData.map((currentPlaylist) => {
            return (
              <Grid>
                <Typography>{currentPlaylist.PlaylistName}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    )
}

export default PlaylistArea;