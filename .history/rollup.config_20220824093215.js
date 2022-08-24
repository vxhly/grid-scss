import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default {
  input: 'src/grid-scss.scss',
  output: {
    // file: 'lib/grid-scss',
  },
  plugins: [
    scss() // will output compiled styles to output.css
  ]
}