const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.relative(__dirname, '.'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@images': path.resolve(__dirname, 'src/images/'),
    },
  },
};
