import logo from "./logo.svg";
import "@fontsource/roboto";
import { Grid, Button, Typography } from "@material-ui/core";
import "./App.css";

import {faArrowAltCircleLeft, faArrowAltCircleRight, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function App() {
  return (
    <Grid container className='App container-mx-height' justifyContent='center' alignItems="center">
      <Grid item alignContent="center" alignItems="center" justifyContent="center" style={{display: 'flex'}}>
      <Grid item><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{width: 80, height: 80}}/></Grid>
      <Grid item>
        <FontAwesomeIcon icon={faPlayCircle} style={{width: 250, height: 250, margin: 40}}></FontAwesomeIcon>
      </Grid>
      {/* 
        <Grid
          item
          style={{ width: 300, height: 300, backgroundColor: "red", margin: 40 }} className='br-circle'
        >
          <Grid></Grid>
        </Grid>
        */}
        <Grid item><FontAwesomeIcon icon={faArrowAltCircleRight} style={{width: 80, height: 80}}/></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
