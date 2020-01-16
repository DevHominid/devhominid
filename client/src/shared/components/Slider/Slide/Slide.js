import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slide.css';

const Slide = ({ item }) => {
  const listParas = item.paras.map((para) => (
    <p key={para.id}>{para.text}</p>
  ));

  return (
    <div className={styles.Slide}>{listParas}</div>
  );
};

Slide.propTypes = {
  item: PropTypes.object.isRequired
};

export default Slide;
