import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { GoogleIcon } from '../Icons';

import styles from './styles';

function ButtonGoogle({ signIn, onPress }) {
  const label = signIn ? 'Continue with Google' : 'Sign Up with Google';
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <GoogleIcon />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ButtonGoogle;
