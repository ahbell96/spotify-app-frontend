import {Component} from 'react';
import logo from "./logo.svg";
import "@fontsource/roboto";
import { Grid, Button, Typography } from "@material-ui/core";
import "./App.css";

import {faArrowAltCircleLeft, faArrowAltCircleRight, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class App extends Component {
  state = {

  }

  render() {
    return (
      <Grid container className='App container-mx-height' justifyContent='center' alignItems="center">
        <Grid item alignContent="center" alignItems="center" justifyContent="center" style={{display: 'flex'}}>
        <Grid item><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{width: 80, height: 80}}/></Grid>
        <Grid item>
          <FontAwesomeIcon icon={faPlayCircle} style={{width: 250, height: 250, margin: 40}}></FontAwesomeIcon>
        </Grid>
          <Grid item><FontAwesomeIcon icon={faArrowAltCircleRight} style={{width: 80, height: 80}}/></Grid>
        </Grid>
      </Grid>
    );
  }
}
