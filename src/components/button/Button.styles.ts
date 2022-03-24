import { darken, lighten, readableColor, rgba } from 'polished';
import { css, CSSProperties, FlattenSimpleInterpolation } from 'styled-components';
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

const buttonVariants: Record<BinuiButtonVariant, (theme: BinuiTheme) => FlattenSimpleInterpolation> = {
    default: theme => css`
      background-color: unset;
      color: ${theme.colors.primary[theme.mode]};
      border: none;

      &:hover {
        color: ${invertDarken[theme.mode](0.1, theme.colors.primary[theme.mode])};
        background-color: ${rgba(invertDarken[theme.mode](0.1, theme.colors.primary[theme.mode]), 0.05)};
      }
    `,
    outlined: theme => css`
      background-color: unset;
      color: ${theme.colors.primary[theme.mode]};
      border: 1px solid ${theme.colors.primary[theme.mode]};

      &:hover {
        color: ${invertDarken [theme.mode](0.1, theme.colors.primary[theme.mode])};
        border-color: ${invertDarken [theme.mode](0.1, theme.colors.primary [theme.mode])};
        background-color: ${rgba(invertDarken [theme.mode](0.1, theme.colors.primary [theme.mode]), 0.05)};
      }
    `,
    contained: theme => css`
      color: ${readableColor(theme.colors.primary[theme.mode])};
      background-color: ${theme.colors.primary[theme.mode]};
      border: none;

      &:hover {
        background-color: ${darken(0.05, theme.colors.primary[theme.mode])};
      }
    `,
};

const fontSize: Record<BinuiButtonSize, string> = {
    small: '0.8em',
    medium: '1em',
    large: '1.2em',
};


export const buttonStyles = ({ theme, size, weight }: StyledBinuiButtonProps & { theme: BinuiTheme }) => css`
  border-radius: ${theme.borderRadius};
  font-size: ${fontSize[size!]};
  font-weight: ${weight || 400};
  padding: 0.25em 1em;
  transition: all 0.25s;
  cursor: pointer;
  user-select: none;
`;

export const buttonVariantStyles = ({ variant, theme }: StyledBinuiButtonProps & { theme: BinuiTheme }) =>
    buttonVariants[variant!](theme);