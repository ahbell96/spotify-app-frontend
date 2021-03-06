import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import TempPlaylistData from "./Temp/TempPlaylistData";
import axios from "axios";

const PlaylistArea = ({setSelectedPlaylist}) => {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    // cors - security measure to consider.
    axios.get("http://localhost:8080/playlists").then((response) => {
      let userPlaylists = response.data.items;

      // restructuring data
      userPlaylists = userPlaylists.map(({name, id}, index) => {
        return { name, id };
      });

      setPlaylistData(userPlaylists);

    });
  }, []);

  return (
    <Grid className='playlist-area-container'>
      <Grid item>
        <Typography
          variant='h4'
          style={{ paddingTop: 20, paddingBottom: 20, textAlign: "center" }}
        >
          Playlists
        </Typography>
      </Grid>
      <Grid item>
        {playlistData.map((currentPlaylist) => {
          return (
            <Grid justifyContent='center' style={{ display: "flex" }}>
              <Button variant='h3' style={{ color: "white" }} onClick={() => setSelectedPlaylist(currentPlaylist)}>
                {currentPlaylist.name}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default PlaylistArea;
