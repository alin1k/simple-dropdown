import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

const tailwindcss = await import('tailwindcss');
const autoprefixer = await import('autoprefixer');

export default {
  input: 'src/index.ts', // Your library's entry point
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs', // CommonJS
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Module
      sourcemap: true,
    },
  ],
  plugins: [
    terser(),
    peerDepsExternal(),
    resolve(), // Resolves modules from node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }), // TypeScript support
    postcss({
      extract: true,
      minimize: true,
      plugins: [tailwindcss.default, autoprefixer.default],
    }), // PostCSS with Tailwind CSS and Autoprefixer
  ],
  external: ['react', 'react-dom'], // Exclude React from the bundle
};
