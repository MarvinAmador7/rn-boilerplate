import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

function PrimaryButton({
  title,
  onPress,
}) {
  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.baseButton}
      titleStyle={styles.baseTitle}
      title={title}
      onPress={onPress}
    />
  );
}

export default PrimaryButton;
