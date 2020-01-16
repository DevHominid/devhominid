import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuToggle.css';

const MenuToggle = ({ clickHandler, menuActive }) => {
  const activeClass = menuActive ? styles.active : '';

  return (
    <button
      className={`${styles.MenuToggle} ${activeClass}`}
      type="button"
      onClick={() => clickHandler(!menuActive)}
    >
      <div className={styles.iconBox}>
        <div />
      </div>
    </button>
  );
};

MenuToggle.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  menuActive: PropTypes.bool.isRequired
};

export default MenuToggle;
