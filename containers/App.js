import { Component } from 'react';
import { connect } from 'react-redux';
import { populateState, resetState } from '../store';
import App from '../components/App';

class AppContainer extends Component {
  componentDidMount() {
    const { preloadedData, populateState, resetState } = this.props;
    if (preloadedData) {
      populateState(preloadedData);
    } else {
      resetState();
    }
  }

  render() {
    return <App />;
  }
};

const mapDispatchToProps = {
  populateState,
  resetState,
};

export default connect(null, mapDispatchToProps)(AppContainer);
