import React from 'react';
import Work from './Work';

describe('<Work />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Work />);
    expect(wrapper).to.have.length(1);
  });
});
