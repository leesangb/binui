import { darken, lighten, readableColor, rgba } from 'polished';
import { css, CSSProperties } from 'styled-components';
import { BinuiTheme, BinuiThemeMode } from '../../theme';


export type BinuiButtonVariant = 'default' | 'outlined' | 'contained';
export type BinuiButtonSize = 'small' | 'medium' | 'large'

export interface StyledBinuiButtonProps {
    variant?: BinuiButtonVariant;
    size?: BinuiButtonSize;
    weight?: CSSProperties['fontWeight'];
}

const invertDarken: Record<BinuiThemeMode, (amount: string | number, color: string) => string> = {
    dark: lighten,
    light: darken,
};

const buttonVariants: Record<BinuiButtonVariant, (theme: BinuiTheme) => CSSProperties & { hover?: CSSProperties }> = {
    default: theme => ({
        backgroundColor: 'unset',
        color: theme.colors.primary[theme.mode],
        border: 'none',
        hover: {
            color: invertDarken[theme.mode](0.1, theme.colors.primary[theme.mode]),
            backgroundColor: rgba(invertDarken[theme.mode](0.1, theme.colors.primary[theme.mode]), 0.05),
        },
    }),
    outlined: theme => ({
        backgroundColor: 'unset',
        color: theme.colors.primary[theme.mode],
        border: `1px solid`,
        borderColor: theme.colors.primary[theme.mode],
        hover: {
            color: invertDarken[theme.mode](0.1, theme.colors.primary[theme.mode]),
            borderColor: invertDarken[theme.mode](0.1, theme.colors.primary[theme.mode]),
            backgroundColor: rgba(invertDarken[theme.mode](0.1, theme.colors.primary[theme.mode]), 0.05),
        },
    }),
    contained: theme => ({
        color: readableColor(theme.colors.primary[theme.mode]),
        backgroundColor: theme.colors.primary[theme.mode],
        border: 'none',
        hover: {
            backgroundColor: darken(0.05, theme.colors.primary[theme.mode]),
        },
    }),
};

const fontSize: Record<BinuiButtonSize, string> = {
    small: '0.8em',
    medium: '1em',
    large: '1.2em',
};


export const buttonStyles = ({ theme, variant, size, weight }: StyledBinuiButtonProps & { theme: BinuiTheme }) => {
    const button = buttonVariants[variant!](theme);
    return css`
      border-radius: ${theme.borderRadius};
      font-size: ${fontSize[size!]};
      font-weight: ${weight || 400};
      padding: 0.25em 1em;
      transition: all 0.25s;
      cursor: pointer;
      user-select: none;
      border: ${button.border};
      border-color: ${button.borderColor};
      color: ${button.color};
      background-color: ${button.backgroundColor};

      &:hover {
        color: ${button.hover?.color};
        border-color: ${button.hover?.borderColor};
        background-color: ${button.hover?.backgroundColor};
      }
    `;
};