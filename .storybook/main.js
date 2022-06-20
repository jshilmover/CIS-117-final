module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links/register",
    "@storybook/addon-essentials/",
    "@storybook/addon-controls/register",
  ],
  staticDirs: ["../public"],
  core: {
    builder: "webpack5",
  },
};
