import { darken, lighten, readableColor, rgba } from 'polished';
import { PropsWithChildren } from 'react';
import styled, { css, CSSProperties, FlattenSimpleInterpolation } from 'styled-components';
import { BinuiTheme, BinuiThemeMode } from '../../theme';

type ButtonType = 'button' | 'a';

export interface BinuiButtonProps<T extends ButtonType | undefined> extends StyledBinuiButtonProps {
    as?: T;
}

type ButtonProps<T extends ButtonType | undefined> = BinuiButtonProps<T> & JSX.IntrinsicElements[NonNullable<T>]
type BinuiButtonSize = 'small' | 'medium' | 'large'
type BinuiButtonVariant = 'default' | 'outlined' | 'contained';

interface StyledBinuiButtonProps {
    variant?: BinuiButtonVariant;
    size?: BinuiButtonSize;
    color?: CSSProperties['color'];
    weight?: CSSProperties['fontWeight'];
}

const invertDarken: Record<BinuiThemeMode, (amount: string | number, color: string) => string> = {
    dark: lighten,
    light: darken,
};

const fontSize: Record<BinuiButtonSize, string> = {
    small: '0.8em',
    medium: '1em',
    large: '1.2em',
};

const buttonVariants: Record<BinuiButtonVariant, (theme: BinuiTheme, color?: string) => FlattenSimpleInterpolation> = {
    default: (theme, color) => css`
      background-color: unset;
      color: ${color || theme.palette.primary};
      border: none;

      &:hover {
        color: ${invertDarken[theme.mode](0.1, color || theme.palette.primary)};
        background-color: ${rgba(invertDarken[theme.mode](0.1, color || theme.palette.primary), 0.05)};
      }
    `,
    outlined: (theme, color) => css`
      background-color: unset;
      color: ${color || theme.palette.primary};
      border: 1px solid ${color || theme.palette.primary};

      &:hover {
        color: ${invertDarken [theme.mode](0.1, color || theme.palette.primary)};
        border-color: ${invertDarken [theme.mode](0.1, color || theme.palette.primary)};
        background-color: ${rgba(invertDarken [theme.mode](0.1, color || theme.palette.primary), 0.05)};
      }
    `,
    contained: (theme, color) => css`
      color: ${readableColor(color || theme.palette.primary)};
      background-color: ${color || theme.palette.primary};
      border: none;

      &:hover {
        background-color: ${darken(0.05, color || theme.palette.primary)};
      }
    `,
};

const buttonStyles = ({ theme, size, weight }: StyledBinuiButtonProps & { theme: BinuiTheme }) => css`
  border-radius: ${theme.borderRadius};
  font-size: ${fontSize[size || 'medium']};
  font-weight: ${weight || 400};
  padding: 0.25em 1em;
  transition: all 0.25s;
  cursor: pointer;
  user-select: none;
`;

const buttonVariantStyles = ({ variant, theme, color }: StyledBinuiButtonProps & { theme: BinuiTheme }) =>
    buttonVariants[variant || 'default'](theme, color);

const StyledButton = styled.button<StyledBinuiButtonProps>(
    buttonStyles,
    buttonVariantStyles,
    css`text-decoration: none`,
);

const Button = <T extends ButtonType | undefined>({ as, ...others }: PropsWithChildren<ButtonProps<T>>) => {
    return (
        <StyledButton as={as || 'button'} {...others}/>
    );
};

Button.defaultProps = {
    as: 'button',
    variant: 'default',
    size: 'medium',
    weight: 500,
};

export default Button;