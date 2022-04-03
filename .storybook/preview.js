import { useDarkMode } from 'storybook-dark-mode';
import { BinuiGlobalStyle, createBinuiTheme } from '../src';
import BinuiThemeProvider from '../src/theme/BinuiThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};


export const decorators = [
    (Story) => (
        <BinuiThemeProvider theme={createBinuiTheme({ mode: useDarkMode() ? 'dark' : 'light' })}>
            <BinuiGlobalStyle/>
            <Story/>
        </BinuiThemeProvider>
    ),
];