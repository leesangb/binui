import { ButtonHTMLAttributes } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { BinuiTheme } from '../../theme/BinuiTheme';

type BinuiButtonVariant = 'default' | 'outlined' | 'contained';

export interface ButtonProps {
    label?: string;
    variant: BinuiButtonVariant;
}

const buttonVariants: Record<BinuiButtonVariant, (theme: BinuiTheme) => CSSProperties & { hover?: CSSProperties }> = {
    default: theme =>
        theme.mode === 'light'
            ? ({
                background: 'none',
                color: '#a09fea',
                border: 'none',
            }) : ({
                background: 'none',
                color: '#605edb',
                border: 'none',
            })
    ,
    outlined: theme =>
        theme.mode === 'light'
            ? ({
                background: 'none',
                color: '#a09fea',
                border: '1px solid #a09fea',
            }) : ({
                background: 'none',
                color: '#605edb',
                border: '1px solid #605edb',
            }),

    contained: theme =>
        theme.mode === 'light'
            ? ({
                color: '#f2f2f2',
                background: '#a09fea',
                border: 'none',
            }) : ({
                color: '#f2f2f2',
                background: '#605edb',
                border: 'none',
            }),
};

const StyledButton = styled.button<ButtonProps>`
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1em;
  padding: 0.25em 1em;
  transition: 0.25s;
  cursor: pointer;
  user-select: none;
  border: ${({ theme, variant }) => buttonVariants[variant](theme).border};
  color: ${({ theme, variant }) => buttonVariants[variant](theme).color};
  background: ${({ theme, variant }) => buttonVariants[variant](theme).background};
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const Button = ({
                    label,
                    variant,
                    children,
                    ...buttonProps
                }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
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