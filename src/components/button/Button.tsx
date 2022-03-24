import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { buttonStyles, buttonVariantStyles, StyledBinuiButtonProps } from './Button.styles';

interface BinuiButtonProps extends StyledBinuiButtonProps {
}

type ButtonProps = BinuiButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<StyledBinuiButtonProps>(
    buttonStyles,
    buttonVariantStyles,
);

const Button = ({ variant, size, weight, children, ...buttonProps }: ButtonProps) => {
    return (
        <StyledButton variant={variant} size={size} weight={weight} {...buttonProps}>
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    variant: 'default',
    size: 'medium',
    weight: 500,
};

export default Button;