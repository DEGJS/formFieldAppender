import resolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'demo/src/js/demo.js',
    output: {
        file: 'demo/dist/js/demo-bundle.js',
        format: 'iife',
        name: 'demo-bundle.js'
    },
    plugins: [
        resolve(),
        commonJs(),
        babel()
    ]
}