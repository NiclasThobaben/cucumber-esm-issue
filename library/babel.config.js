const sharedPresets = ['@babel/preset-typescript', '@babel/preset-react']

module.exports = {
  env: {
    test: {
      presets: [
        ...sharedPresets,
      ],
      plugins: [
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-transform-modules-commonjs'
      ]
    },
  },
  presets: [
    ...sharedPresets
  ],
}
