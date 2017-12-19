import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import SearchForm from './components/SearchForm';

import Home from './components/Home';
import SeatBox from './components/Seatbox'

const Routes = (
  <Router>
    <div>
      <Route exact path = "/" component = { SeatBox } />
    </div>
  </Router>
);

export default Routes;


// <Route path = "/seat_selection" component = { SeatSelection } />

// const Roster = () => (
//   <Switch>
//     <Route exact path='/roster' component={FullRoster}/>
//     <Route path='/roster/:number' component={Player}/>
//   </Switch>
// )

/* <Route path = "/searchform" component = { SearchForm } /> */
