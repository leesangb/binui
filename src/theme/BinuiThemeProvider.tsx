import { PropsWithChildren } from 'react';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import { TEXT_COMPONENTS } from '../components/text/Text';
import { BinuiTheme } from './BinuiTheme';

interface BinuiThemeProviderProps {
    theme: BinuiTheme;
}

const GlobalStyle = createGlobalStyle(
    ({ theme }: { theme: BinuiTheme }) => css`
      body {
        background-color: ${theme.colors.background[theme.mode]};
        font-size: 16px;
      }

      ${TEXT_COMPONENTS.join(',')}, li, ul, ol, td, table, tr, th, a, button {
        color: ${theme.colors.text.primary[theme.mode]};
        margin: 0;
      }
    `,
);


const BinuiThemeProvider = ({ theme, children }: PropsWithChildren<BinuiThemeProviderProps>) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme}/>
            {children}
        </ThemeProvider>
    );
};

export default BinuiThemeProvider;