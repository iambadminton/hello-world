module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9090, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: true,
    disableHostCheck: false
  }
};