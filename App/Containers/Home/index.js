import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { logout } from '../../Redux/Reducers/Auth';
import { Images } from '../../Themes';

// Styles
import styles from './styles';

function HomeScreen({ dispatch }) {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
          <Image source={Images.logo} style={styles.logo} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Home Screen
          </Text>
          <Button onPress={() => { dispatch(logout()); }} title="Logout" />
        </View>
      </ScrollView>
    </View>
  );
}
export default connect(null)(HomeScreen);
