import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Schedule from './Schedule';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </Router>
  );
};

export default App;
