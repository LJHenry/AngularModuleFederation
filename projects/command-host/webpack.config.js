const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "typhoon": "http://localhost:4200/remoteEntry.js",
    "f35": "http://localhost:4200/remoteEntry.js",
    "datalink": "http://localhost:4200/remoteEntry.js",
    "simFunctions": "http://localhost:4200/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
