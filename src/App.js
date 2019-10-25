import React, {Component, Fragment} from 'react';
// import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css/animate.css'

// router
import { BrowserRouter as Router } from 'react-router-dom';


// views
import SplashScreen from './components/views/SplashScreen';

// layout 
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Main from './components/layout/Main'

class App extends Component {
  state = {
    splash: true
  };

  callBackSplash = splash => {
    // receives callBack value from child SplashScreen.js callBack function: props.callBackSplash(false)
    this.setState({
      splash: splash // set state splash value to false
    });
    console.log(splash);
  };

  render() {
    const { splash } = this.state;
    return (
      // <Provider store={store}>
        <Router basename={'/'}>
          <div className='App'>
            {splash ? (
              <Fragment>
                <SplashScreen callBackSplash={this.callBackSplash} />
              </Fragment>
            ) : (
              <Fragment>
                <Header />
                  <Main />
                <Footer />
              </Fragment>
            )}
          </div>
        </Router>
      // </Provider>
    );
  }
}

export default App;