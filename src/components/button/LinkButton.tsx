import { AnchorHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { buttonStyles, buttonVariantStyles, StyledBinuiButtonProps } from './Button.styles';

interface BinuiLinkButtonProps extends StyledBinuiButtonProps {
}

type LinkButtonProps = BinuiLinkButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

const StyledLinkButton = styled.a<StyledBinuiButtonProps>(
    buttonStyles,
    buttonVariantStyles,
    css`text-decoration: none`,
);

const LinkButton = ({ variant, size, weight, children, ...linkProps }: LinkButtonProps) => {
    return (
        <StyledLinkButton variant={variant} size={size} weight={weight} {...linkProps}>
            {children}
        </StyledLinkButton>
    );
};

LinkButton.defaultProps = {
    variant: 'default',
    size: 'medium',
    weight: 500,
};

export default LinkButton;