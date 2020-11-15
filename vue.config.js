module.exports = {
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true,
            exclude: [/\.map$/, /_redirects/, /^.*jpg\/.*$/], //this fixed it.
        }
    },
    publicPath: '/'
  }