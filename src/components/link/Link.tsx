import { ComponentProps, ComponentType } from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import { BinuiTheme } from '../../theme';

interface BinuiLinkProps<T extends 'a' | ComponentType | undefined> {
    as?: T;
}

type LinkProps<T extends 'a' | ComponentType | undefined> = BinuiLinkProps<T> & ComponentProps<NonNullable<T>>;

const linkStyle = ({ theme }: ThemeProps<BinuiTheme>) => css`
  color: ${theme.colors.primary[theme.mode]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled.a<BinuiLinkProps<'a' | ComponentType>>(
    linkStyle,
);

const Link = <T extends 'a' | ComponentType | undefined>({ as, ...others }: LinkProps<T>) => {
    return <StyledLink as={as} {...others}/>;
};

Link.defaultProps = {
    as: 'a',
};

export default Link;