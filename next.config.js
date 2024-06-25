/** @type {import('next').NextConfig} */

var devconfig = {};
try {
  devconfig = require('./dev.next.config.js');
} catch (ex) { }

const config = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/',
          destination: 'https://dev.mitech.ai/',
          basePath: false
        },
        {
          source: '/:path*',
          destination: 'https://dev.mitech.ai/:path*',
          basePath: false
        }
      ]
    };
  }
};

module.exports = config;
