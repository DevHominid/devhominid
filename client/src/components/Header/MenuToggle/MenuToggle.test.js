import React from 'react';
import sinon from 'sinon';
import MenuToggle from './MenuToggle';
import styles from './MenuToggle.css';

const mockClickHandler = sinon.spy();

describe('<MenuToggle />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MenuToggle clickHandler={mockClickHandler} />);
    expect(wrapper).to.have.length(1);
  });

  it('sets activeClass based on menuActive', () => {
    const wrapper = shallow(<MenuToggle clickHandler={mockClickHandler} />);
    expect(wrapper.find('button').hasClass(styles.active)).to.equal(false);
    const wrapper2 = shallow(
      <MenuToggle clickHandler={mockClickHandler} menuActive />
    );
    expect(wrapper2.find('button').hasClass(styles.active)).to.equal(true);
  });

  it('calls clickHandler when clicked', () => {
    const wrapper = shallow(<MenuToggle clickHandler={mockClickHandler} />);
    expect(mockClickHandler.called).to.equal(false);
    wrapper.find('button').simulate('click');
    expect(mockClickHandler.called).to.equal(true);
  });
});
