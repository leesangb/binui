import deepmerge from 'deepmerge';

export type BinuiThemeMode = 'light' | 'dark';

type BinuiThemeColor = Record<BinuiThemeMode, string>;

export interface BinuiThemeColors {
    primary: BinuiThemeColor;
    background: BinuiThemeColor;
    paper: BinuiThemeColor;
    text: BinuiThemeColor;
    border: BinuiThemeColor;
}

export interface BinuiTheme {
    mode: BinuiThemeMode;
    reverseMode: () => BinuiThemeMode;
    colors: BinuiThemeColors;
    borderRadius: string;
}

const defaultTheme = (): BinuiTheme => ({
    mode: 'light',
    reverseMode: function () {
        return this.mode === 'light' ? 'dark' : 'light';
    },
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
        border: {
            light: '#bbbbbb',
            dark: '#f2f2f2',
        },
    },
    borderRadius: '8px',
});

export const createBinuiTheme = (overrides: Partial<BinuiTheme> = {}): BinuiTheme =>
    deepmerge(defaultTheme(), overrides);