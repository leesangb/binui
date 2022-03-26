import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { BinuiTheme } from './BinuiTheme';

interface BinuiThemeProviderProps {
    theme: BinuiTheme;
}


const BinuiThemeProvider = ({ theme, children }: PropsWithChildren<BinuiThemeProviderProps>) => {
    return (
        <ThemeProvider theme={theme}>
            <Reset/>
            {children}
        </ThemeProvider>
    );
};

export default BinuiThemeProvider;