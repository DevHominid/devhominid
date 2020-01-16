import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Nav.css';

const Nav = ({ headerHeight, mobile, routes }) => {
  const height = mobile ? `calc(100vh - ${headerHeight}px)` : 'auto';
  const mobileClass = mobile ? styles.mobile : '';
  const listRoutes = routes.map((route) => (
    <li key={route.id}><NavLink exact activeStyle={{ color: '#fff' }} to={route.path}>{route.id}</NavLink></li>
  ));

  return (
    <nav className={`${styles.Nav} ${mobileClass}`} style={{ height }}>
      <ul>{listRoutes}</ul>
    </nav>
  );
};

Nav.defaultProps = {
  headerHeight: 0,
  mobile: false
};

Nav.propTypes = {
  headerHeight: PropTypes.number,
  mobile: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Nav;
