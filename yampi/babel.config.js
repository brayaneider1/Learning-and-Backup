module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver',
        { alias:
          {
            "@assets": "./assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@containers": "./src/containers",
            "^@services/(.+)": ([, name]) => `./src/services/${name}`,
            "@ui": "./src/components",
            "@ui/shapes": "./src/components/shapes",
            "@ui/buttons": "./src/components/buttons"
          }
        },
      ],
    ],
  };
};
