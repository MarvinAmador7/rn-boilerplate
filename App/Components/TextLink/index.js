import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function TextLink({ label, clickHandler, ...allProps }) {
  return (
    <TouchableOpacity onPress={clickHandler} {...allProps.container}>
      <Text style={styles.link}>{label}</Text>
    </TouchableOpacity>
  );
}

export default TextLink;
