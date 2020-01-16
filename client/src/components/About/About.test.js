import React from 'react';
import About from './About';

describe('<About />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).to.have.length(1);
  });
});
