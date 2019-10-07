const { setup: setupDevServer } = require('jest-dev-server');
const getPort = require('get-port');

module.exports = async function globalSetup() {
  return Promise.all([
    require('jest-environment-puppeteer/lib/global').setup(),
    getPort().then(port => {
      process.env.PORT = port;
      return setupDevServer({
        debug: true,
        launchTimeout: 30 * 1000,
        command: 'yarn start -- --p ' + port,
        port: port,
      })
    })
  ])
}