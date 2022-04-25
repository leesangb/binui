import { ComponentProps, ComponentType } from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import { BinuiTheme } from '../../theme';

type LinkComponentType = 'a' | ComponentType;

export interface BinuiLinkProps<T extends LinkComponentType | undefined> {
    as?: T;
}

type LinkProps<T extends LinkComponentType | undefined> = BinuiLinkProps<T> & ComponentProps<NonNullable<T>>;

const linkStyle = ({ theme }: ThemeProps<BinuiTheme>) => css`
  color: ${theme.colors.primary[theme.mode]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled.a<BinuiLinkProps<LinkComponentType>>(
    linkStyle,
);

const Link = <T extends LinkComponentType | undefined>({ as, ...others }: LinkProps<T>) => {
    return <StyledLink as={as || 'a'} {...others}/>;
};

Link.defaultProps = {
    as: 'a',
};

export default Link;