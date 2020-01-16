import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide/Slide';
import Counter from './Counter/Counter';
import styles from './Slider.css';

const Slider = ({ counterAlign, header, items }) => {
  const [count, setCount] = useState(1);
  const [translate, setTranslate] = useState(0);
  const [itemWidth, setItemWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);
  const itemRefs = [];

  const listItems = items.map((item) => {
    const otherRef = useRef(null);
    itemRefs.push(otherRef);
    return (
      <li key={item.id} ref={otherRef} style={{ width: `${itemWidth}px` }}>
        <Slide item={item} />
      </li>
    );
  });

  const handleResize = () => {
    setItemWidth(sliderRef.current.clientWidth);
  };

  useEffect(() => {
    setItemWidth(sliderRef.current.clientWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTranslate(itemRefs[count - 1].current.offsetLeft);
  }, [count, itemWidth]);

  return (
    <div className={styles.Slider} ref={sliderRef}>
      {header && (
        <header className={styles.header}>
          <h1>{header}</h1>
          <span>{`${count}/${items.length}`}</span>
        </header>
      )}
      <ul
        className={styles.list}
        style={{
          transform: `translateX(-${translate}px)`,
          width: `${itemWidth * items.length}px`
        }}
      >
        {listItems}
      </ul>
      <Counter
        count={count}
        counterAlign={counterAlign}
        length={items.length}
        setCount={setCount}
      />
    </div>
  );
};

Slider.defaultProps = {
  counterAlign: 'flex-start',
  header: ''
};

Slider.propTypes = {
  counterAlign: PropTypes.string,
  header: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Slider;
