const { defineConfig } = require("@vue/cli-service");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = {
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()],
  },
};
