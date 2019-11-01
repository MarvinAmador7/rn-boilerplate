import React from 'react';
import {
  View
} from 'react-native';

import WelcomeViewPager from '../../Components/WelcomeViewPager';

// Styles
import styles from './styles';

export default function LaunchScreen() {
  return (
    <View style={styles.mainContainer}>
      <WelcomeViewPager />
    </View>
  );
}
