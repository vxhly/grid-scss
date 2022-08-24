import scss from 'rollup-plugin-scss'

export default {
  input: 'src/grid-scss.scss',
  output: {
    file: 'output.js',
  },
  plugins: [
    scss() // will output compiled styles to output.css
  ]
}