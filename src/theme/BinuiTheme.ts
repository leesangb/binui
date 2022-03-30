import deepmerge from 'deepmerge';

export type BinuiThemeMode = 'light' | 'dark';

type BinuiThemeColor = Record<BinuiThemeMode, string>;
type BinuiTextColor = 'primary' | 'secondary';

export interface BinuiThemeColors {
    primary: BinuiThemeColor;
    background: BinuiThemeColor;
    paper: BinuiThemeColor;
    text: Record<BinuiTextColor, BinuiThemeColor>;
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
            primary: {
                light: '#121212',
                dark: '#f2f2f2',
            },
            secondary: {
                light: '#aaaaaa',
                dark: '#555555',
            },
        },
        border: {
            light: '#dddddd',
            dark: '#aaaaaa',
        },
    },
    borderRadius: '8px',
});

export const createBinuiTheme = (overrides: Partial<BinuiTheme> = {}): BinuiTheme =>
    deepmerge(defaultTheme(), overrides);