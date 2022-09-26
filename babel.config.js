module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            crypto: "react-native-crypto",
            stream: "readable-stream",
            fs: "react-native-level-fs",
          },
        },
      ],
    ],
  };
};
