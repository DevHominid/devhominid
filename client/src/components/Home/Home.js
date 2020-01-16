import React from 'react';
import styles from './Home.css';
import earthIcon from '../../img/earth.svg';
import spacemanIcon from '../../img/spaceman1.svg';

const Home = () => {
  const listFib = (fibs) => fibs.map((fib) => {
    const style = { marginRight: `${fib}px` };
    return (
      <div key={fib} style={style} />
    );
  });

  const getRanodomInt = (min, max) => {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1)) + min;
  };

  const getBound = (min, max, i) => {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    const x = Math.floor(Math.random() * (newMax - newMin + 1)) + min;
    const y = Math.floor(Math.random() * (newMax - newMin + 1)) + min;

    if ((x >= 35 && x <= 65) && (y >= 35 && y <= 65)) {
      if (i % 2 === 0) {
        const bounds = [getRanodomInt(1, 35), getRanodomInt(65, 100)];
        return bounds;
      }
      const bounds = [getRanodomInt(65, 100), getRanodomInt(1, 35)];
      return bounds;
    }
    return [x, y];
  };

  const generateStars = (number) => {
    const stars = [];
    for (let i = 0; i < number; i += 1) {
      const bounds = getBound(1, 100, i);
      const star = {
        delay: getRanodomInt(1, 3000),
        diameter: getRanodomInt(2, 6),
        blur: getRanodomInt(0, 2),
        x: bounds[0],
        y: bounds[1],
      };
      stars.push(star);
    }
    return stars.map((star) => {
      const style = {
        animationDelay: `${star.delay / 1000}s`,
        filter: `blur(${star.blur}px)`,
        height: `${star.diameter}px`,
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.diameter}px`
      };

      return (
        <div className={styles.star} key={`${star.delay}${star.x}`} style={style} />
      );
    });
  };

  return (
    <div className={styles.Home}>
      <div className={styles.contentWrapper}>
        <header>
          <div className={styles.fibonacci}>{listFib([5, 8, 13, 0])}</div>
          <div>
            <h1>Dev Hominid</h1>
            <h2>Software Development With Humankind in Mind.</h2>
          </div>
        </header>
        <div className={styles.spaceModule}>
          <img src={earthIcon} alt="earth" />
          {generateStars(50)}
        </div>
        <img className={styles.spaceman} src={spacemanIcon} alt="spaceman" />
      </div>
    </div>
  );
};

export default Home;
