/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('./rn-transformer.js'),
    },
    resolver: {
      sourceExts: [...sourceExts, 'scss', 'sass', 'css'],
    },
  };
})();