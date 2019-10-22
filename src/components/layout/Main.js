import React from 'react';

// router
import { Switch, Route } from 'react-router-dom';

// views
import Home from '../views/Home';
import SplashScreen from '../views/SplashScreen';

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={SplashScreen} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
