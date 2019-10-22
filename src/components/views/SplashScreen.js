import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import './SplashScreen.scss'

const SplashScreen = () => {
  return (
    <section className="splash-body">
      <header className="splash-title animated fadeIn delay-1s">Splash Screen</header>
      {/* <p>This is the first screen the user will see when visiting the site.</p> */}
      <NavLink exact to='/home' className="splash-cta animated fadeInDown delay-2s">
      {/* <i class="fas fa-angle-double-down"></i> */}
      ENTER
      </NavLink>
    </section>
  );
};

export default SplashScreen;
