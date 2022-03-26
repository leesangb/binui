import { PropsWithChildren } from 'react';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { BinuiTheme } from './BinuiTheme';

interface BinuiThemeProviderProps {
    theme: BinuiTheme;
}

const GlobalStyle = createGlobalStyle(
    ({ theme }: { theme: BinuiTheme }) => css`
      body {
        background-color: ${theme.colors.background[theme.mode]};
      }`,
);


const BinuiThemeProvider = ({ theme, children }: PropsWithChildren<BinuiThemeProviderProps>) => {
    return (
        <ThemeProvider theme={theme}>
            <Reset/>
            <GlobalStyle theme={theme}/>
            {children}
        </ThemeProvider>
    );
};

export default BinuiThemeProvider;