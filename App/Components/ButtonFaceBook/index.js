import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { FacebookIcon } from '../Icons';

import styles from './styles';

function ButtonFaceBook({ signIn, onPress }) {
  const label = signIn ? 'Continue with facebook' : 'Sign Up with Facebook';
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <FacebookIcon />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ButtonFaceBook;
