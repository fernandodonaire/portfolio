const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@mui/styled-engine": path.resolve(
        __dirname,
        "node_modules/@mui/styled-engine-sc"
      ),
    },
  },
};
