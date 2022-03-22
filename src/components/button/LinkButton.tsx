import { AnchorHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { buttonStyles, StyledBinuiButtonProps } from './Button.styles';

export interface BinuiButtonProps extends StyledBinuiButtonProps {
    label: string;
}

type LinkButtonProps = BinuiButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

const StyledButton = styled.a<StyledBinuiButtonProps>(
    buttonStyles,
    css`text-decoration: none`,
);

const LinkButton = ({ label, variant, size, weight, children, ...buttonProps }: LinkButtonProps) => {
    return (
        <StyledButton variant={variant} size={size} weight={weight} {...buttonProps}>
            {label}
        </StyledButton>
    );
};

LinkButton.defaultProps = {
    variant: 'default',
    size: 'medium',
    weight: 500,
};

export default LinkButton;