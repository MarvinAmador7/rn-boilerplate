import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

function Textinput({
  textChangeHandler,
  value,
  label,
  containerStyles,
  keyboard = 'default'
}) {
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboard}
        style={styles.input}
        value={value}
        onChangeText={textChangeHandler}
      />
    </View>
  );
}

export default Textinput;
