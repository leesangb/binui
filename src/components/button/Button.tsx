import { darken } from 'polished';
import { ButtonHTMLAttributes } from 'react';
import styled, { css, CSSProperties } from 'styled-components';
import { BinuiTheme } from '../../theme';

type BinuiButtonVariant = 'default' | 'outlined' | 'contained';

export interface BinuiButtonProps {
    label?: string;
    variant: BinuiButtonVariant;
}

type ButtonProps = BinuiButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const buttonVariants: Record<BinuiButtonVariant, (theme: BinuiTheme) => CSSProperties & { hover?: CSSProperties }> = {
    default: theme => ({
        backgroundColor: 'unset',
        color: theme.colors.primary[theme.mode],
        border: 'none',
        hover: {
            color: darken(0.1, theme.colors.primary[theme.mode]),
        },
    }),
    outlined: theme => ({
        backgroundColor: 'unset',
        color: theme.colors.primary[theme.mode],
        border: `1px solid`,
        borderColor: theme.colors.primary[theme.mode],
        hover: {
            color: darken(0.1, theme.colors.primary[theme.mode]),
            borderColor: darken(0.1, theme.colors.primary[theme.mode]),
        },
    }),
    contained: theme => ({
        color: '#f2f2f2',
        backgroundColor: theme.colors.primary[theme.mode],
        border: 'none',
        hover: {
            backgroundColor: darken(0.1, theme.colors.primary[theme.mode]),
        },
    }),
};

const StyledButton = styled.button<ButtonProps>(({ theme, variant }) => {
    const button = buttonVariants[variant](theme);
    return css`
      border-radius: ${theme.borderRadius};
      font-size: 1em;
      padding: 0.25em 1em;
      transition: 0.25s;
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
});

const Button = ({ label, variant, children, ...buttonProps }: ButtonProps) => {
    return (
        <StyledButton variant={variant} {...buttonProps}>
            {label}
        </StyledButton>
    );
};

Button.defaultProps = {
    variant: 'default',
};

export default Button;