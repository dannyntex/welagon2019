// const base_config = require('../webpack.config.js');
//
// module.exports = async storybookBaseConfig => {
//     const conf = await base_config();
//     storybookBaseConfig.module = conf.module;
//     storybookBaseConfig.resolve = conf.resolve;
//     return storybookBaseConfig;
// };

//const path = require('path');
// your app's webpack.config.js
const custom = require('../webpack.config.js');

module.exports = async ({ config, mode }) => {
  const conf = await custom();
  const newConfig ={
    ...config,
    module: { ...config.module, rules: conf.module.rules },
    resolve:conf.resolve
  }
  return newConfig
};
