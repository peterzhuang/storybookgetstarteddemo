module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links','@storybook/addon-info'],
  webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};
