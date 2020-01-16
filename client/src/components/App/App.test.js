import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from '../Header/Header';
import Routes from '../Routes/Routes';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });

  it('renders one <Header />', () => {
    const wrapper = mount(
      <Router>
        <App />
      </Router>
    );
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('renders one <Routes />', () => {
    const wrapper = mount(
      <Router>
        <App />
      </Router>
    );
    expect(wrapper.find(Routes)).to.have.length(1);
  });
});
