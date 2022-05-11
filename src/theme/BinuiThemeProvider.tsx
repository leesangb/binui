import { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BinuiTheme, BinuiThemeMode } from './BinuiTheme';
import { createBinuiTheme, OverridableBinuiThemeCollection } from './createBinuiTheme';

interface BinuiThemeProviderProps {
    mode: BinuiThemeMode;
    overrides?: OverridableBinuiThemeCollection;
}

export const BinuiThemeContext = createContext({
    invertMode: (onInvert?: () => void) => {
    },
    setMode: (_: BinuiThemeMode) => {
    },
});

const BinuiThemeProvider = ({ mode: defaultMode, overrides, children }: PropsWithChildren<BinuiThemeProviderProps>) => {
    const themes = useMemo(() => createBinuiTheme(overrides), []);
    const [theme, setTheme] = useState<BinuiTheme>(themes[defaultMode]);

    const invertMode = useCallback((onInvert?: () => void) => {
        setTheme(theme => theme.mode === 'light' ? themes.dark : themes.light);
        if (onInvert) {
            onInvert();
        }
    }, []);
    const setMode = useCallback((mode: BinuiThemeMode) => setTheme(themes[mode]), []);

    useEffect(() => {
        setTheme(themes[defaultMode]);
    }, [defaultMode]);

    return (
        <BinuiThemeContext.Provider value={{ invertMode, setMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </BinuiThemeContext.Provider>
    );
};

export default BinuiThemeProvider;