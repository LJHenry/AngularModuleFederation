const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'datalink',

  exposes: {
    './DatalinkModule': './projects/datalink/src/app/link-16/link-16.module.ts',
  },

  shared: {
    ...shareAll({ 
      singleton: true, 
      strictVersion: true, 
      requiredVersion: 'auto' }),
  },

});
