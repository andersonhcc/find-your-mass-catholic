module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  "plugins": [
    'module:react-native-dotenv',
    'react-native-reanimated/plugin',
  ]
};
