import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routeConfig from '../../config/routes';
import Header from './Header';
import MenuToggle from './MenuToggle/MenuToggle';
import styles from './Header.css';

const { Event } = window;

const resizeWindow = (x, y) => {
  if (x) {
    window.innerWidth = x;
  }
  if (y) {
    window.innerHeight = y;
  }
  window.dispatchEvent(new Event('resize'));
};

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).to.have.length(1);
  });

  it('sets activeClass based on menuActive', () => {
    window.innerWidth = 1040;
    const wrapper = mount(
      <Router>
        <Header routes={routeConfig} />
      </Router>
    );
    expect(wrapper.find(`.${styles.mobileMenu}`).hasClass(styles.active)).to.equal(false);
    wrapper.find(MenuToggle).simulate('click');
    expect(wrapper.find(`.${styles.mobileMenu}`).hasClass(styles.active)).to.equal(true);
  });

  it('sets height', () => {
    window.innerWidth = 1070;
    const wrapper = mount(
      <Router>
        <Header routes={routeConfig} />
      </Router>
    );
    expect(wrapper.find(`.${styles.Header}`).get(0).props.style);
  });

  it('calls handleResize on resize events', () => {
    window.innerWidth = 1070;
    const wrapper = mount(
      <Router>
        <Header routes={routeConfig} />
      </Router>
    );
    expect(wrapper.find(MenuToggle)).to.have.length(0);
    resizeWindow(1060, null);
    wrapper.update();
    expect(wrapper.find(MenuToggle)).to.have.length(1);
  });

  it('sets themeClass based on theme', () => {
    const wrapper = shallow(
      <Header routes={routeConfig} theme="A" />
    );
    const wrapper2 = shallow(
      <Header routes={routeConfig} theme="B" />
    );

    expect(wrapper.find(`.${styles.Header}`).hasClass(styles.themeA)).to.equal(true);
    expect(wrapper2.find(`.${styles.Header}`).hasClass(styles.themeB)).to.equal(true);
  });
});
