module.exports = [
  '@storybook/preset-create-react-app',
  {
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: null,
      knobs: { addDecorator: false },
    },
  },
];
