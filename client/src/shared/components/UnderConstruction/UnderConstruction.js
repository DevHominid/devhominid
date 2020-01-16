import React from 'react';
import styles from './UnderConstruction.css';
import logo from '../../../img/logo.svg';

const UnderConstruction = () => (
  <div className={styles.UnderConstruction}>
    <img src={logo} alt="logo" />
    <h4>Under Construction</h4>
  </div>
);

export default UnderConstruction;
