import React from 'react';
import { Route } from 'react-router-dom';
import routeConfig from '../../config/routes';
import Routes from './Routes';

describe('<Routes />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).to.have.length(1);
  });

  it('renders correct routes', () => {
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((acc, route) => {
      const routeProps = route.props();
      acc[routeProps.path] = routeProps.component;
      return acc;
    }, {});
    routeConfig.forEach((route) => {
      expect(pathMap[`${route.path}`]).to.eql(route.component);
    });
  });
});
