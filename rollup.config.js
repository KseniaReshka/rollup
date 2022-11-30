import { babel } from '@rollup/plugin-babel'
import styles from 'rollup-plugin-styles'
import image from 'rollup-plugin-img'

export default {
  input: './1.js',
  output: {
    file: './build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({ babelHelpers: 'bundled'}),
    styles(),
    image({
      limit: 10000
    })
  ]
};