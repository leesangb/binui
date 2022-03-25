import { HTMLAttributes } from 'react';
import styled, { css, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';
import { BinuiTheme } from '../../theme';

interface StyledTextProps {
    as?: TextComponentType;
    variant?: TextComponentType;
}


const components = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'] as const;
type TextComponentType = typeof components[number]

const styleMapping: Record<TextComponentType, (theme: BinuiTheme) => FlattenSimpleInterpolation> = {
    h1: theme => css`
      font-weight: 700;
    `,
    h2: theme => css`
      font-weight: 700;
    `,
    h3: theme => css`
      font-weight: 600;
    `,
    h4: theme => css`
      font-weight: 600;
    `,
    h5: theme => css`
      font-weight: 500;
    `,
    h6: theme => css`
      font-weight: 500;
    `,
    div: theme => css`
      font-weight: 400;
    `,
    span: theme => css`
      font-weight: 400;
    `,
    p: theme => css`
      font-weight: 400;
    `,
};


const textStyle = ({ theme }: ThemeProps<BinuiTheme>) => css`
  color: ${theme.colors.text[theme.mode]};
  transition: all 0.25s;
`;

const textVariantsStyle = ({ theme, as, variant }: StyledTextProps & ThemeProps<BinuiTheme>) =>
    styleMapping[variant || as!]!(theme);

const StyledText = styled.div<StyledTextProps>(
    textStyle,
    textVariantsStyle,
);

interface TextProps extends HTMLAttributes<HTMLDivElement> {
}

const Text = (props: TextProps) => <StyledText {...props} />;

Text.defaultProps = {
    as: 'div',
};

export default Text;
