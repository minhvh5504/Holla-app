module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.jsx'],
          alias: {
            tests: ['./tests/'],
            '@components': './src/components',
            '@views': './src/views',
            '@assets': './src/assets',
            '@navigation': './src/navigation',
            '@utils': './src/utils',
          },
        },
        'react-native-reanimated/plugin',
      ],
    ],
  }
}
