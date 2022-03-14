const path = require("path");

const extraNodeModules = {
  modules: path.resolve(path.join(__dirname, "../../node_modules")),
};

const watchFolders = [path.resolve(path.join(__dirname, "../../node_modules"))];

const nodeModulesPaths = [path.resolve(path.join(__dirname, "./node_modules"))];

const { createMetroConfiguration } = require('expo-yarn-workspaces');
const expoMetroConfiguration = createMetroConfiguration(__dirname);

module.exports = {
  ...expoMetroConfiguration,
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
    ...expoMetroConfiguration.transformer,
  },
  resolver: {
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
};
