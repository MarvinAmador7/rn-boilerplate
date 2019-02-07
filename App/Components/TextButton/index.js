import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles';

function TextButton({
  icon,
  title,
  ...allprops
}) {
  return (
    <Button
      buttonStyle={styles.baseButton}
      titleStyle={styles.baseTitle}
      title={title}
      icon={icon}
      iconContainerStyle={styles.iconContainer}
      {...allprops}
    />
  );
}

export default TextButton;
