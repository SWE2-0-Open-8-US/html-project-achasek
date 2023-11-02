import PropTypes from 'prop-types';
import "./Splash.css";
import { useState } from 'react';

const Splash = () => {
  const [showSplash, setShowSplash] = useState(true);
  (() => {
  setTimeout(() => {
    setShowSplash(false)}
  , 7000)
  window.scrollTo(0, 1000)
  })()

  return (
    <section className="container">
      <h1 className={showSplash ? "text" : null}>
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