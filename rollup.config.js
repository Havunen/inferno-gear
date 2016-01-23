import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

const replace = require('rollup-plugin-replace');

process.env.NODE_ENV = 'production';


export default {
    entry: 'lib/index.js',
    sourceMap: false,
    plugins: [
        json(),
        babel(),
        npm(),
        commonjs({
            // search for files other than .js files (must already
            // be transpiled by a previous plugin!)
            include: [
                'node_modules/*/**'
            ],
            extensions: [ '.js', '.coffee' ] // defaults to [ '.js' ]
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
