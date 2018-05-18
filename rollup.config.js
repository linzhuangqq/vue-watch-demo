import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  targets: [
    { dest: 'dist/vue-watch.cjs.js', format: 'cjs' },
    { dest: 'dist/vue-watch.es.js', format: 'es' }
  ],
  plugins: [
    babel({
      babelrc: false,
      externalHelpers: false,
      exclude: 'node_modules/**',
      'plugins': [
        ['transform-object-rest-spread', { 'useBuiltIns': true }]
      ]
    })
  ]
}
