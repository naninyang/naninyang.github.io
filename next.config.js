const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
});

module.exports = {
  reactStrictMode: true,
}
