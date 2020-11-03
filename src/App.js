import React, { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar'
import HomeInfoPanel from './Components/HomeInfoPanel'
import CountryInfoPanel from './Components/CountryInfoPanel'
import NavigationBottomBar from './Components/NavigationBottomHardCoded'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [Page, setPage] = useState('Home')
  const [countrySelected, setCountrySelected] = React.useState('usa')
  const classes = useStyles();

  return (
    <div className="App">
      <Router>

        <NavigationBar
          getCountryName={
            (value) => {
              setCountrySelected(value);
              console.log(countrySelected);
            }
          } />
        
        <Switch>
        
          <Route path='/' exact>
            <HomeInfoPanel />
          </Route>
        
          <Route path='/CountryStats'>
            <CountryInfoPanel CountryName={countrySelected} />
          </Route>
        
        </Switch>

        <NavigationBottomBar />

      </Router>
    </div>

  );
}
export default App;

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#f7f7f7',
    borderTop: '2px solid purple'
  },
  hideDisplay: {
    display: 'none'
  }
});