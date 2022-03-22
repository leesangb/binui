import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { buttonStyles, StyledBinuiButtonProps } from './Button.styles';

export interface BinuiButtonProps extends StyledBinuiButtonProps {
    label: string;
}

type ButtonProps = BinuiButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<StyledBinuiButtonProps>(buttonStyles);

const Button = ({ label, variant, size, weight, children, ...buttonProps }: ButtonProps) => {
    return (
        <StyledButton variant={variant} size={size} weight={weight} {...buttonProps}>
            {label}
        </StyledButton>
    );
};

Button.defaultProps = {
    variant: 'default',
    size: 'medium',
    weight: 500,
};

export default Button;