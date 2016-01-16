import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/inferno-gear.umd.js';
config.moduleName = 'inferno-gear';

export default config;