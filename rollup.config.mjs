import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'dist/lib-esm/main.js',
    output: {
        file: 'dist/memz.umd.js',
        format: 'umd',
        name: 'Memz'
    },
    plugins: [babel({ babelHelpers: 'bundled' }), nodeResolve()]
}
