import React from 'react';
import { Text } from 'react-native';
import { Fonts } from '../Themes';

function TextCustom({ children, ...allprops }) {
  return (
    <Text style={[Fonts.style.copy, allprops.styles]} {...allprops}>
      {children}
    </Text>
  );
}

export default TextCustom;
