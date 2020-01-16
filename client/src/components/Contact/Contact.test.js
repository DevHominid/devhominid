import React from 'react';
import Contact from './Contact';

describe('<Contact />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).to.have.length(1);
  });
});
