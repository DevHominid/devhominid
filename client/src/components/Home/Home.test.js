import React from 'react';
import Home from './Home';
import styles from './Home.css';

describe('<Home />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).to.have.length(1);
  });

  it('lists fib sequence', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(`.${styles.fibonacci}`).get(0).props.children).to.have.length(4);
    expect(wrapper.find(`.${styles.fibonacci}`).get(0).props.children[0].props.style.marginRight).to.equal('5px');
    expect(wrapper.find(`.${styles.fibonacci}`).get(0).props.children[1].props.style.marginRight).to.equal('8px');
    expect(wrapper.find(`.${styles.fibonacci}`).get(0).props.children[2].props.style.marginRight).to.equal('13px');
    expect(wrapper.find(`.${styles.fibonacci}`).get(0).props.children[3].props.style.marginRight).to.equal('0px');
  });

  it('generates stars', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(`.${styles.star}`)).to.have.length(50);
  });
});
