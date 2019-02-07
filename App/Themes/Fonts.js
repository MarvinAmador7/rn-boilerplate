const type = {
  base: 'NunitoSans-Regular',
  bold: 'NunitoSans-Bold',
  light: 'NunitoSans-Light',
};

const size = {
  xl: 36,
  large: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5
};

const style = {
  title: {
    fontFamily: type.bold,
    fontSize: size.large
  },
  label: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  input: {
    fontFamily: type.bold,
    fontSize: size.regular,
  },
  copy: {
    fontFamily: type.base,
    fontSize: size.small
  },
  number: {
    fontFamily: type.bold,
    fontSize: size.xl
  },
  button: {
    fontFamily: type.bold,
    fontSize: size.regular
  },
};

export default {
  type,
  size,
  style
};
