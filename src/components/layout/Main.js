import React from 'react';

// router
import { Switch, Route } from 'react-router-dom';

// views
import About from '../views/About'
import Contact from '../views/Contact'
import Home from '../views/Home';

// css 
// import './Main.scss'

const Main = () => {
  return (
    <duv>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
    </duv>
      
  );
};

export default Main;
