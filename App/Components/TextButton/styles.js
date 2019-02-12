import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  baseTitle: {
    ...Fonts.style.button,
    color: Colors.darkBlue,
  },
  baseButton: {
    backgroundColor: 'transparent',
    // width: '100%',
    height: 50,
    borderRadius: 50,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 10,
  },
});
