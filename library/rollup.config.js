import pkg from './package.json'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

const input = './src/index.tsx'
const extensions = ['.js', '.jsx', '.ts', '.tsx']
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const plugins = [
  resolve({extensions}),
  babel({
    babelHelpers: 'inline',
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    extensions,
    exclude: [
      './node_modules/**',
    ]
  })
]

export default [
  {
    input,
    output: [
      {
        dir: './dist/cjs',
        format: 'cjs',
        exports: 'named',
        preserveModules: true,
        sourcemap: true
      },
      {
        dir: './dist/esm',
        format: 'esm',
        exports: 'named',
        preserveModules: true,
        sourcemap: true
      }
    ],
    plugins,
    external
  }
]
