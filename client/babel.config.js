console.log('---- imported babel config')

module.exports = {
    plugins: [
      [
        "@babel/plugin-transform-modules-commonjs",
      ]
    ],
    presets: [
      ["@babel/preset-react", {"runtime": "automatic"}],
      "@babel/preset-typescript",
    ],
    ignore: [
      // ignore node_modules, except our pure ESM dependencies
      "node_modules/(?!@table-library|dnd-core|react-dnd|@react-dnd|react-dnd-html5-backend)",
    ],
  };