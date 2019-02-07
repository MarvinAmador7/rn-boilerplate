import React, { Component } from 'react';
import { View, StatusBar, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Amplify, { Auth } from 'aws-amplify';
import { StorageHelper } from '@aws-amplify/core';
import ReduxNavigation from '../../Navigation/ReduxNavigation';
import { startup } from '../../Redux/Reducers/StartupRedux';
import ReduxPersist from '../../Config/ReduxPersist';
import styles from './styles';

export const storage = new StorageHelper().getStorage();

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:7ecbf540-dc1a-41cf-83bf-4afd87b22183',

    region: 'us-east-1',

    userPoolId: 'us-east-1_ootfBlTbJ',

    userPoolWebClientId: 't9c0da1aqfr5eqao4h3johb2r'
  },
  API: {
    graphql_endpoint: 'https://4kl8chh27l.execute-api.us-east-1.amazonaws.com/dev',
    graphql_endpoint_iam_region: 'us-east-1',
    graphql_headers: async () => ({
      Authorization: (await Auth.currentSession()).idToken.jwtToken
    })
  },
  authenticationFlowType: 'CUSTOM_AUTH',
  storage,
});

class RootContainer extends Component {
  componentDidMount() {
    const { startupAction } = this.props;
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      startupAction();
    }
    // Auth.signOut().then(() => AsyncStorage.clear().then(() => {
    //   console.log(AsyncStorage.getAllKeys());
    // }));
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
