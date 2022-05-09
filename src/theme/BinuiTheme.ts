export type BinuiThemeMode = 'light' | 'dark';
export type BinuiTextColor = 'primary' | 'secondary' | 'disabled';
export type BinuiBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BinuiBreakpoints = {
    up: (breakpoint: BinuiBreakpoint) => string;
    down: (breakpoint: BinuiBreakpoint) => string;
} & Record<BinuiBreakpoint, number>

export interface BinuiPalette {
    primary: string;
    background: string;
    paper: string;
    text: Record<BinuiTextColor, string>;
    border: string;
}

export interface BinuiTheme {
    mode: BinuiThemeMode;
    palette: BinuiPalette;
    borderRadius: string;
    breakpoints: BinuiBreakpoints;
    spacing: (n: number) => string;
}
