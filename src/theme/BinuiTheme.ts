import deepmerge from 'deepmerge';

export type BinuiThemeMode = 'light' | 'dark';

type BinuiThemeColor = Record<BinuiThemeMode, string>;

export interface BinuiThemeColors {
    primary: BinuiThemeColor;
    background: BinuiThemeColor;
    paper: BinuiThemeColor;
    text: BinuiThemeColor;
}

export interface BinuiTheme {
    mode: BinuiThemeMode;
    colors: BinuiThemeColors;
    borderRadius: string;
}

const defaultTheme = (): BinuiTheme => ({
    mode: 'light',
    colors: {
        primary: {
            light: '#a09fea',
            dark: '#605edb',
        },
        background: {
            light: '#fcfcfc',
            dark: '#2f2f2f',
        },
        paper: {
            light: '#fcfcfc',
            dark: '#3a3a3a',
        },
        text: {
            light: '#121212',
            dark: '#f2f2f2',
        },
    },
    borderRadius: '8px',
});

export const createBinuiTheme = (overrides: Partial<BinuiTheme> = {}): BinuiTheme =>
    deepmerge(defaultTheme(), overrides);