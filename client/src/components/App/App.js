import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import routeConfig from '../../config/routes';
import Header from '../Header/Header';
import Routes from '../Routes/Routes';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
      theme: 'A'
    };
  }

  componentDidMount() {
    const { location } = this.props;
    this.setTheme(location.pathname);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (prevProps.location.pathname !== location.pathname) {
      this.setTheme(location.pathname);
    }
  }

  setHeaderHeight = (headerHeight) => {
    this.setState({ headerHeight });
  }

  setTheme = (pathName) => {
    const { theme } = this.state;

    if (pathName === '/' && theme !== 'A') {
      this.setState({ theme: 'A' });
    }
    if (pathName !== '/' && theme !== 'B') {
      this.setState({ theme: 'B' });
    }
  }

  render() {
    const { headerHeight, theme } = this.state;
    const height = `calc(100% - ${headerHeight}px)`;

    return (
      <main className={styles.App}>
        <Header
          headerHeight={headerHeight}
          routes={routeConfig}
          setHeaderHeight={this.setHeaderHeight}
          theme={theme}
        />
        <div className={styles.container} style={{ height }}>
          <Routes />
        </div>
      </main>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(App);
