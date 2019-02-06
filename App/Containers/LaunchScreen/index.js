import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View
} from 'react-native';
import { Images } from '../../Themes';

// Styles
import styles from './styles';

export default function LaunchScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
          <Image source={Images.logo} style={styles.logo} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>
            iQey v2
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}
