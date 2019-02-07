import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    ...Fonts.style.label,
    marginRight: Metrics.smallMargin,
  },
});
