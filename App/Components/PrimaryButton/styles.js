import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  baseTitle: {
    ...Fonts.style.button,
    color: Colors.white,
  },
  baseButton: {
    backgroundColor: Colors.fuchsia,
    height: 50,
    borderRadius: 50,
  },
});
