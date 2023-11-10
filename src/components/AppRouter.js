// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CurrencyCollection from './CurrencyCollection';
import WatchList from './WatchList';
import AddCurrency from './AddCurrency';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/add">Add Currency</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/watchlist">
            <WatchList />
          </Route>
          <Route path="/add">
            <AddCurrency />
          </Route>
          <Route path="/">
            <CurrencyCollection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
