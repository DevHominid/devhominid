import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.css';

const Counter = ({
  count,
  counterAlign,
  length,
  setCount
}) => {
  const [activeChevron, setActiveChevron] = useState('R');
  const activeChevronClass = (direction) => (direction === activeChevron ? styles.activeChevron : '');

  const setStroke = (direction) => {
    if (direction === activeChevron) {
      return '#64C196';
    }
    if ((direction === 'L' && count === 1) || (direction === 'R' && count === length)) {
      return '#979797';
    }
    return '#fff';
  };

  const counterStyle = {
    display: 'flex',
    justifyContent: counterAlign
  };

  const chevronStyle = (direction) => ({
    fill: 'none',
    stroke: setStroke(direction),
    strokeMiterlimit: 10,
    strokeWidth: '4px'
  });

  const decrementCount = () => {
    if (count !== 1) {
      setCount((prevCount) => prevCount - 1);
      if (activeChevron === 'R') {
        setActiveChevron('L');
      }
      if (count === 2) {
        setActiveChevron('R');
      }
    }
  };

  const incrementCount = () => {
    if (count !== length) {
      setCount((prevCount) => prevCount + 1);
      if (activeChevron === 'L') {
        setActiveChevron('R');
      }
      if (count === length - 1) {
        setActiveChevron('L');
      }
    }
  };

  return (
    <div className={styles.Counter} style={counterStyle}>
      <button className={`${styles.chevron} ${activeChevronClass('L')}`} onClick={decrementCount} type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.82 36.13">
          <title>Chevron</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1" style={chevronStyle('L')}>
              <line x1="1.33" y1="1.49" x2="20.33" y2="18.49" />
              <line x1="3.34" y1="34.8" x2="20.33" y2="15.78" />
            </g>
          </g>
        </svg>
        <div className={styles.border} />
      </button>
      <button className={`${styles.chevron} ${activeChevronClass('R')}`} onClick={incrementCount} type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.82 36.13">
          <title>Chevron</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1" style={chevronStyle('R')}>
              <line x1="1.33" y1="1.49" x2="20.33" y2="18.49" />
              <line x1="3.34" y1="34.8" x2="20.33" y2="15.78" />
            </g>
          </g>
        </svg>
        <div className={styles.border} />
      </button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  counterAlign: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired
};

export default Counter;
