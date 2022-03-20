export type BinuiThemeMode = 'light' | 'dark';

type BinuiThemeColor = Record<BinuiThemeMode, string>;

export interface BinuiThemeColors {
    primary: BinuiThemeColor;
    background: BinuiThemeColor;
}

export interface BinuiTheme {
    mode: BinuiThemeMode;
    colors: BinuiThemeColors;
    borderRadius: string;
}

export const createBinuiTheme = (overrides?: Partial<BinuiTheme>): BinuiTheme => ({
    mode: overrides?.mode || 'light',
    colors: {
        primary: {
            light: '#a09fea',
            dark: '#605edb',
            ...overrides?.colors?.primary,
        },
        background: {
            light: '#f2f2f2',
            dark: '#2f2f2f',
            ...overrides?.colors?.background,
        },
    },
    borderRadius: overrides?.borderRadius || '8px',
});