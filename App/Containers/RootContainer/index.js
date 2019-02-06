import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import ReduxNavigation from '../../Navigation/ReduxNavigation';
import { startup } from '../../Redux/Reducers/StartupRedux';
import ReduxPersist from '../../Config/ReduxPersist';

// Styles
import styles from './styles';

class RootContainer extends Component {
  componentDidMount() {
    const { startupAction } = this.props;
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      startupAction();
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startupAction: () => dispatch(startup())
});

export default connect(null, mapDispatchToProps)(RootContainer);
