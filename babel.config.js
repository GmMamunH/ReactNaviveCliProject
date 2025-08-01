module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'react-native-worklets/plugin', // THIS PLUGIN WILL BE ALWAYS LAST LINE
  ],
};
