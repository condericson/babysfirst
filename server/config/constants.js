require('dotenv').config();

const devConfig = {
  JWT_SECRET: process.env.JWT_SECRET_DEV,
  MONGO_URL: process.env.MONGO_URL_DEV,
};

const testConfig = {
  JWT_SECRET: 'Dl1-GEamWElpfwM2nhLpDfsv_85edjQF',
  MONGO_URL: 'mongodb://localhost/firstmemories-test',
};

const prodConfig = {
  JWT_SECRET: process.env.JWT_SECRET_PROD,
  MONGO_URL: process.env.MONGO_URL_PROD,
};

const defaultConfig = {
  PORT: process.env.PORT || 8080,
};

function envConfig(env) {
  console.log('This is the defaultConfig', defaultConfig);
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
