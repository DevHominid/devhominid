import React from 'react';
import Blog from './Blog';

describe('<Blog />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper).to.have.length(1);
  });
});
