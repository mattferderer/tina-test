const withSvgr = require("next-svgr");

module.exports = {
  images: {
    domains: ["localhost:3000"],
  },
  ...withSvgr({
    async rewrites() {
      return [
        {
          source: "/",
          destination: "/home",
        },
      ];
    },
  })
};
