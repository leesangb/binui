import { CSSProperties, PropsWithChildren } from 'react';
import styled, { css, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';
import { BinuiTheme } from '../../theme';

export const TEXT_COMPONENTS = ['div',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'span', 'p',
    'strong', 'b', 'i', 'del', 'em',
    'code', 'blockquote', 'pre',
] as const;
type TextComponentType = typeof TEXT_COMPONENTS[number];

const defaultComponent: TextComponentType = 'p';

interface StyledTextProps {
    variant?: TextComponentType;
    color?: CSSProperties['color'] | 'primary' | 'textPrimary' | 'textSecondary';
}

interface BinuiTextProps<T extends TextComponentType | undefined> extends StyledTextProps {
    as?: T;
}

type TextProps<T extends TextComponentType | undefined> = BinuiTextProps<T> & JSX.IntrinsicElements[NonNullable<T>]

const headerMargin = '16px 0';

const styleMapping: Record<TextComponentType, (theme: BinuiTheme) => FlattenSimpleInterpolation> = {
    h1: () => css`
      font-weight: 700;
      font-size: 2em;
      margin: ${headerMargin};
    `,
    h2: () => css`
      font-weight: 700;
      font-size: 1.8em;
      margin: ${headerMargin};
    `,
    h3: () => css`
      font-weight: 600;
      font-size: 1.6em;
      margin: ${headerMargin};
    `,
    h4: () => css`
      font-weight: 600;
      font-size: 1.4em;
      margin: ${headerMargin};
    `,
    h5: () => css`
      font-weight: 500;
      font-size: 1.2em;
      margin: ${headerMargin};
    `,
    h6: () => css`
      font-weight: 500;
      font-size: 1em;
      margin: ${headerMargin};
    `,
    div: () => css`
      font-weight: 400;
      font-size: 1em;
    `,
    span: () => css`
      font-weight: 400;
      font-size: 1em;
    `,
    p: () => css`
      font-weight: 400;
      font-size: 1em;
    `,
    strong: () => css`
      font-weight: 500;
      font-size: 1em;
    `,
    b: () => css`
      font-weight: 700;
      font-size: 1em;
    `,
    code: () => css`
      font-family: Source Code Pro, Menlo, Consolas, Liberation Mono, monospace;
    `,
    em: () => css`
      font-style: italic;
    `,
    blockquote: theme => css`
      padding-left: 16px;
      font-style: italic;
      border-left: 2px solid ${theme.palette.text.secondary};
      color: ${theme.palette.text.secondary};
      overflow-wrap: break-word;
      margin: 16px;
    `,
    pre: () => css`
    `,
    i: () => css`
      font-style: italic;
    `,
    del: () => css`
      text-decoration: line-through;
    `,
};

const getTextColor = (theme: BinuiTheme, color: StyledTextProps['color']): string => {
    if (!color) {
        return 'inherit';
    }
    if (color === 'primary') {
        return theme.palette.primary;
    }
    if (color === 'textPrimary') {
        return theme.palette.text.primary;
    }
    if (color === 'textSecondary') {
        return theme.palette.text.secondary;
    }
    return color;
};


const textStyle = ({ theme, color }: StyledTextProps & ThemeProps<BinuiTheme>) => css`
  color: ${getTextColor(theme, color)};
  margin: 0;
  transition: all 0.25s;
`;

const textVariantsStyle = ({ theme, as, variant }: BinuiTextProps<TextComponentType> & ThemeProps<BinuiTheme>) =>
    styleMapping[variant || as || defaultComponent](theme);

const StyledText = styled.div<BinuiTextProps<TextComponentType>>(
    textStyle,
    textVariantsStyle,
);

const Text = <T extends TextComponentType | undefined>({ as, ...others }: PropsWithChildren<TextProps<T>>) =>
    <StyledText as={as || defaultComponent} {...others} />;

Text.defaultProps = {
    as: defaultComponent,
    color: 'textPrimary',
};

export default Text;
