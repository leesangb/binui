import { createContext, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { BinuiThemeMode } from './BinuiTheme';
import { createBinuiTheme, OverridableBinuiThemeCollection } from './createBinuiTheme';

interface BinuiThemeProviderProps {
    mode: BinuiThemeMode;
    overrides?: OverridableBinuiThemeCollection;
}

export const BinuiThemeContext = createContext({
    invertMode: () => {
    },
    setMode: (_: BinuiThemeMode) => {
    },
});

const BinuiThemeProvider = ({ mode: defaultMode, overrides, children }: PropsWithChildren<BinuiThemeProviderProps>) => {
    const { theme, invertMode, setMode } = createBinuiTheme(defaultMode, overrides);

    return (
        <BinuiThemeContext.Provider value={{ invertMode, setMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </BinuiThemeContext.Provider>
    );
};

export default BinuiThemeProvider;