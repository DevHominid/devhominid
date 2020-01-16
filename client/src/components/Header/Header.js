import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routeConfig from '../../config/routes';

import MenuToggle from './MenuToggle/MenuToggle';
import Nav from './Nav/Nav';

import styles from './Header.css';
import logo from '../../img/logo.svg';
import logoDark from '../../img/logo-dark.svg';

const Header = ({
  headerHeight,
  routes,
  setHeaderHeight,
  theme
}) => {
  const headerBottomEl = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [menuActive, toggleMenuActive] = useState(false);
  const isMobile = width < 1070;
  const activeClass = menuActive ? styles.active : '';
  const themeClass = styles[`theme${theme}`];

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (headerBottomEl.current && headerHeight === 0) {
      const navHeight = headerBottomEl.current.clientHeight;
      setHeaderHeight(navHeight * 2);
    }
  });

  return (
    <header className={`${styles.Header} ${themeClass}`} style={{ height: headerHeight }}>
      <div className={styles.logo}>
        <Link to={routeConfig[0].path}>
          <img src={theme === 'A' ? logo : logoDark} alt="logo" />
        </Link>
      </div>
      <div className={styles.headerMain}>
        <div className={styles.headerTop} />
        <div className={styles.headerBottom} ref={headerBottomEl}>
          {isMobile ? (
            <MenuToggle
              clickHandler={toggleMenuActive}
              menuActive={menuActive}
            />
          ) : (
            <Nav
              menuActive={menuActive}
              routes={routes.slice(1)}
            />
          )}
        </div>
      </div>
      {isMobile && (
        <div className={`${styles.mobileMenu} ${activeClass}`}>
          <Nav
            headerHeight={headerHeight}
            mobile
            routes={routes}
          />
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  headerHeight: PropTypes.number.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setHeaderHeight: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default Header;
