import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
} from 'react-native';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { Images } from '../../Themes';

import { resetAuth } from '../../Redux/Reducers/Auth';
// Styles
import styles from './styles';

class AuthLoading extends React.Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { dispatch } = this.props;
    dispatch(resetAuth());
    try {
      const user = await Auth.currentSession();
      console.log('currentSession', user);
      dispatch({ type: 'Navigation/NAVIGATE', routeName: 'App' });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Auth' });
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Loading Current User
            </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default connect(null)(AuthLoading);
