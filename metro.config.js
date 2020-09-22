/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-typescript-transformer',
    ),
  },
  // transformer: {
  //   getTransformOptions: async () => ({
  //     transformer: {
  //       babelTransformerPath: require.resolve(
  //         'react-native-typescript-transformer',
  //       ),
  //     },
  //     transform: {
  //       experimentalImportSupport: false,
  //       inlineRequires: false,
  //     },
  //   }),
  // },
};
