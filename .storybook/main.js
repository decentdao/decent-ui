module.exports = {
  "stories": [
    "../design/**/*.stories.mdx",
    "../design/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
    'storybook-addon-designs',
    'storybook-dark-mode'
  ],
  "framework": "@storybook/react"
}