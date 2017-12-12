import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

const Routes = (
  <Router>
    <div>
      <Route exact path = "/" component = { Home } />
      <Route path = "/searchform" component = { SearchForm } />
      <Route path = "/seat_selection" component = { SeatSelection } />
    </div>
  </Router>
);

export default Routes;

// const Roster = () => (
//   <Switch>
//     <Route exact path='/roster' component={FullRoster}/>
//     <Route path='/roster/:number' component={Player}/>
//   </Switch>
// )
