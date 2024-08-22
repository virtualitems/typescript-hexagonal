import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import path from 'path';
import fs from 'fs';


const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));


export default {
  input: path.resolve('build', 'main.js'),
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      preferBuiltins: true,
      mainFields: ['module', 'main'],
    }),
    commonjs(),
  ],
  output: [
    {
      name: pkg.name,
      file: path.resolve('dist', 'lib.js'),
      format: 'es'
    },
  ],
};
