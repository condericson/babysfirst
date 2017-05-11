const nps = require('nps-utils');

const { crossEnv, concurrent, series, rimraf } = nps;

const surgeURL = 'http://firstmemories.surge.sh/';

module.exports = {
  scripts: {
    dev: {
      build: 'babel -w --out-dir=dist --ignore=./server/test/* ./server',
      watch: `${crossEnv('NODE_ENV=development')} nodemon ./dist/index.js`,
      default: concurrent.nps('dev.build', 'dev.watch'),
    },
    clean: {
      description: 'delete dist folder',
      default: rimraf('dist'),
    },
    buildServer: {
      build: `${crossEnv('NODE_ENV=production')} babel --out-dir=dist --ignore=./server/test/* ./server`,
      default: series.nps('clean', 'buildServer.build'),
    },
    buildFrontEnd: {
      default: 'react-scripts build',
    },
    deployFE: {
      description: 'deploy to front end',
      surge: {
        description: 'deploy to surge',
        script: `surge ./build -d ${surgeURL}`,
      },
      default: series.nps('buildFrontEnd', 'deployFE.surge'),
    },
    lintStaged: 'lint-staged',
    lint: {
      default: 'eslint src server',
      fix: 'eslint --fix src',
    },
    linting: {
      description: 'Validate code by linting, type-checking.',
      default: series.nps('lint'),
    },
    test: {
      fe: 'cross-env CI=true react-scripts test --env=jsdom',
      be: "cross-env NODE_ENV=test mocha --colors --compilers js:babel-register $(find server/specs -name '*.specs.js')",
      default: series.nps('test.fe, test.be'),
    },
  },
};
