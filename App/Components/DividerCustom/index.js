import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { Colors } from '../../Themes';
import styles from './styles';

function DividerCustom({ childen }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{childen}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

export default DividerCustom;
