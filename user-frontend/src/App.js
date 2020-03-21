import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Styles.css';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import NavBar from './components/NavBar'
import ExpansionPanel from './components/ExpansionPanel'
import TargetGroupList from './components/TargetGroupList'


class App extends Component {
  render() {

    return (
    	<div>
    	<NavBar />

    	<div>
          <Container maxWidth="sm" class="hero">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              KMUs Vs. Corona
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Wir sammeln Ideen, Hilfsmittel, Finanzierungsquellen und mehr um Klein- und Mittelstandsunternehmen
              aus der Corona-Krise zu helfen. 
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Branchen
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Lösungsansätze
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <TargetGroupList />

    	</div>

    )
  }
}
export default App