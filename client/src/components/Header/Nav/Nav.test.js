import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routeConfig from '../../../config/routes';
import Nav from './Nav';
import styles from './Nav.css';

describe('<Nav />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Nav routes={routeConfig} />);
    expect(wrapper).to.have.length(1);
  });

  it('lists routes', () => {
    const wrapper = shallow(<Nav routes={routeConfig} />);
    expect(wrapper.find('li')).to.have.length(routeConfig.length);
  });

  it('sets height based on "mobile" prop', () => {
    const wrapper = mount(
      <Router>
        <Nav routes={routeConfig} />
      </Router>
    );
    const wrapper2 = mount(
      <Router>
        <Nav headerHeight={100} mobile routes={routeConfig} />
      </Router>
    );

    // eslint-disable-next-line no-underscore-dangle
    expect(wrapper.getDOMNode().style._values.height).to.equal('auto');
    // eslint-disable-next-line no-underscore-dangle
    expect(wrapper2.getDOMNode().style._values.height).to.not.equal('auto');
  });

  it('applies ".mobile" class based on "mobile" prop', () => {
    const wrapper = shallow(<Nav routes={routeConfig} />);
    const wrapper2 = mount(<Router><Nav mobile routes={routeConfig} /></Router>);

    expect(wrapper.find('nav').hasClass(styles.mobile)).to.equal(false);
    expect(wrapper2.find('nav').hasClass(styles.mobile)).to.equal(true);
  });
});
