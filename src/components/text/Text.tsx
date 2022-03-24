import { HTMLAttributes } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { BinuiTheme } from '../../theme';

interface StyledTextProps {
    as?: ComponentType;
}


const components = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'] as const;
type ComponentType = typeof components[number]

const styleMapping: Record<ComponentType, (theme: BinuiTheme) => FlattenSimpleInterpolation> = {
    h1: theme => css`
      font-weight: 700;
    `,
    h2: theme => css``,
    h3: theme => css``,
    h4: theme => css``,
    h5: theme => css``,
    h6: theme => css``,
    div: theme => css``,
    span: theme => css``,
    p: theme => css``,
};

const StyledText = styled.div<StyledTextProps>(
    ({ theme }: { theme: BinuiTheme }) => css`
      color: ${theme.colors.text[theme.mode]};
    `,
    ({ theme, as }: StyledTextProps & { theme: BinuiTheme }) => styleMapping[as!]!(theme));

interface TextProps extends HTMLAttributes<HTMLDivElement> {
}

const Text = (props: TextProps) => <StyledText {...props} />;

Text.defaultProps = {
    as: 'div',
};

export default Text;