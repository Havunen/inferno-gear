import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';

export default {
    entry: 'lib/index.js',
    sourceMap: true,
    plugins: [
        babel(),
        npm({
            // use "jsnext:main" if possible
            // – see https://github.com/rollup/rollup/wiki/jsnext:main
            jsnext: true,

            // use "main" field or index.js, even if it's not an ES6 module
            // (needs to be converted from CommonJS to ES6
            // – see https://github.com/rollup/rollup-plugin-commonjs
            main: true,

            // if there's something your bundle requires that you DON'T
            // want to include, add it to 'skip'
            skip: [],

            // by default, built-in modules such as `fs` and `path` are
            // treated as external if a local module with the same name
            // can't be found. If you really want to turn off this
            // behaviour for some reason, use `builtins: false`
            builtins: false,

            // some package.json files have a `browser` field which
            // specifies alternative files to load for people bundling
            // for the browser. If that's you, use this option, otherwise
            // pkg.browser will be ignored
            browser: true
        })
    ]
};