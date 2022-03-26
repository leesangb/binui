import { darken, lighten, readableColor, rgba } from 'polished';
import { PropsWithChildren } from 'react';
import styled, { css, CSSProperties, FlattenSimpleInterpolation } from 'styled-components';
import { BinuiTheme, BinuiThemeMode } from '../../theme';

type ButtonType = 'button' | 'a';

interface BinuiButtonProps<T extends ButtonType | undefined> extends StyledBinuiButtonProps {
    as: T;
}

type ButtonProps<T extends ButtonType | undefined> = BinuiButtonProps<T> & JSX.IntrinsicElements[NonNullable<T>]
type BinuiButtonSize = 'small' | 'medium' | 'large'
type BinuiButtonVariant = 'default' | 'outlined' | 'contained';

interface StyledBinuiButtonProps {
    variant?: BinuiButtonVariant;
    size?: BinuiButtonSize;
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

const buttonStyles = ({ theme, size, weight }: StyledBinuiButtonProps & { theme: BinuiTheme }) => css`
  border-radius: ${theme.borderRadius};
  font-size: ${fontSize[size!]};
  font-weight: ${weight || 400};
  padding: 0.25em 1em;
  transition: all 0.25s;
  cursor: pointer;
  user-select: none;
`;

const buttonVariantStyles = ({ variant, theme }: StyledBinuiButtonProps & { theme: BinuiTheme }) =>
    buttonVariants[variant!](theme);

const StyledButton = styled.button<StyledBinuiButtonProps>(
    buttonStyles,
    buttonVariantStyles,
    css`text-decoration: none`,
);

const Button = <T extends ButtonType | undefined>({ as, ...others }: PropsWithChildren<ButtonProps<T>>) => {
    return (
        <StyledButton as={as} {...others}/>
    );
};

Button.defaultProps = {
    as: 'button',
    variant: 'default',
    size: 'medium',
    weight: 500,
};

export default Button;