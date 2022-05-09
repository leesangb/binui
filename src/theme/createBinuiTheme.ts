import deepmerge from 'deepmerge';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BinuiBreakpoints, BinuiPalette, BinuiTheme, BinuiThemeMode } from './BinuiTheme';

const defaultLightPalette: BinuiPalette = {
    primary: '#a09fea',
    text: {
        primary: '#121212',
        secondary: '#aaaaaa',
        disabled: '#999999',
    },
    background: '#fcfcfc',
    paper: '#fcfcfc',
    border: '#dddddd',
};

const defaultDarkPalette: BinuiPalette = {
    primary: '#a09fea',
    text: {
        primary: '#f2f2f2',
        secondary: '#888888',
        disabled: '#666666',
    },
    background: '#2f2f2f',
    paper: '#3a3a3a',
    border: '#aaaaaa',
};

const spacing = (n: number) => {
    if (n < 0) {
        return '0px';
    }
    return `${4 + 4 * n}px`;
};

const defaultBorderRadius: string = spacing(2);

const defaultBreakpoints: BinuiBreakpoints = {
    xs: 450,
    sm: 600,
    md: 800,
    lg: 1200,
    xl: 1600,
    down: function (breakpoint) {
        return `@media only screen and (max-width: ${this[breakpoint]}px)`;
    },
    up: function (breakpoint) {
        return `@media only screen and (min-width: ${this[breakpoint]}px)`;
    },
};

interface BinuiThemeCollection {
    light: BinuiPalette;
    dark: BinuiPalette;
    borderRadius: string;
    breakpoints: BinuiBreakpoints;
    spacing: (n: number) => string;
}

const defaultBinuiThemeCollection: BinuiThemeCollection = {
    light: defaultLightPalette,
    dark: defaultDarkPalette,
    borderRadius: defaultBorderRadius,
    breakpoints: defaultBreakpoints,
    spacing,
};

type OverridableBinuiPalette = Partial<Omit<BinuiPalette, 'text'>> & { text?: Partial<Pick<BinuiPalette, 'text'>> };
type OverridableBinuiBreakpoints = Partial<Omit<BinuiBreakpoints, 'up' | 'down'>>

export interface OverridableBinuiThemeCollection {
    light?: OverridableBinuiPalette;
    dark?: OverridableBinuiPalette;
    borderRadius?: string;
    breakpoints?: OverridableBinuiBreakpoints;
}

export const createBinuiTheme = (mode: BinuiThemeMode = 'light', overrides: OverridableBinuiThemeCollection = {}) => {
    const themeCollection = useMemo(() => deepmerge(defaultBinuiThemeCollection, overrides), []);
    const [theme, setTheme] = useState<BinuiTheme>({
        mode,
        palette: themeCollection[mode],
        borderRadius: themeCollection.borderRadius,
        breakpoints: themeCollection.breakpoints,
        spacing: themeCollection.spacing,
    });
    const [currentMode, setCurrentMode] = useState<BinuiThemeMode>(mode);

    useEffect(() => {
        setCurrentMode(mode);
    }, [mode]);

    useEffect(() => {
        setTheme(theme => ({
            ...theme,
            mode: currentMode,
            palette: themeCollection[currentMode],
        }));
    }, [currentMode]);

    const setMode = useCallback((mode: BinuiThemeMode) => setCurrentMode(mode), []);
    const invertMode = useCallback(() => setCurrentMode(currentMode => currentMode === 'light' ? 'dark' : 'light'), []);

    return {
        theme,
        setMode,
        invertMode,
    };
};