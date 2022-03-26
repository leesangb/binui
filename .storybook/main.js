module.exports = {
    'stories': [
        '../**/*.stories.mdx',
        '../**/*.stories.@(ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-docs',
            options: { configureJSX: true },
        },
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-dark-mode',
    ],
    'framework': '@storybook/react',
};