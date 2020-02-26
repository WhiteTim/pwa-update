
import resolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import strip from '@rollup/plugin-strip';

export default {
  input: ['build/pwa-update.js'],
  output: {
    file: 'dist/pwa-update.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    resolve(),
    minifyHTML(),
    minify(),
    strip({
      functions: ['console.log']
    })
  ]
};