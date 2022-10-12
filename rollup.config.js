import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy'
import svg from 'rollup-plugin-svg'
const packageJson = require('./package.json');

export default {
  input: 'design/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      name: 'fractal-design'
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser(),
    json({ resolveJsonModule: true }),
    copy({
      targets: [
        { src: 'README.md', dest: 'dist' }
      ]
    }),
    svg()
  ]
}