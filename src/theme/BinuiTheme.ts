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
    spacing: (n: number) => string;
    colors: BinuiThemeColors;
    borderRadius: string;
}

const spacing = (n: number) => {
    if (n < 0) {
        return '0px';
    }
    return `${4 + 4 * n}px`;
};

const defaultTheme = (): BinuiTheme => ({
    mode: 'light',
    reverseMode: function () {
        return this.mode === 'light' ? 'dark' : 'light';
    },
    spacing,
    colors: {
        primary: {
            light: '#a09fea',
            dark: '#a09fea',
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
                dark: '#888888',
            },
        },
        border: {
            light: '#dddddd',
            dark: '#aaaaaa',
        },
    },
    borderRadius: spacing(1),
});

export const createBinuiTheme = (overrides: Partial<BinuiTheme> = {}): BinuiTheme =>
    deepmerge(defaultTheme(), overrides);