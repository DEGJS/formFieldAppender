import resolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'js/demo.js',
    output: {
        file: 'js/demo-bundle.js',
        format: 'iife',
        name: 'demo-bundle.js'
    },
    plugins: [
        resolve(),
        commonJs(),
        babel()
    ]
}