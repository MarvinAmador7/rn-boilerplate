module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'parserOptions': {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  'globals': {
    "fetch": false
  }
}