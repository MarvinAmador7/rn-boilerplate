import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.facebookBlue,
    borderRadius: 2,
    width: 228,
    height: 40,
    padding: 1,
    marginBottom: 25,
  },
  innerContainer: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  text: {
    fontSize: Fonts.size.medium,
    marginLeft: 11,
    color: Colors.white,
  },
});
