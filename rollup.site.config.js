import config from './rollup.config';

config.entry = 'site/site.js';
config.format = 'iife';
config.dest = 'site/build/bundle.js';

export default config;