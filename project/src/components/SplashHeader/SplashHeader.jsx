import PropTypes from 'prop-types';
import "./SplashHeader.css";
import { useEffect } from 'react';

const Splash = ({ setShowSplash, showSplash }) => {
  useEffect(() => {setTimeout(() => {setShowSplash(!showSplash)}, 7000)})

  return (
    <section className="container">
      <h1 className="text">
        Welcome To My Page
      </h1>
    </section>
  );
};

Splash.propTypes = {
    setShowSplash: PropTypes.func,
    showSplash: PropTypes.bool
};

export default Splash;