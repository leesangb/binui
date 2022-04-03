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
    h1: theme => css`
      font-weight: 700;
      font-size: 2em;
      margin: ${headerMargin};
    `,
    h2: theme => css`
      font-weight: 700;
      font-size: 1.8em;
      margin: ${headerMargin};
    `,
    h3: theme => css`
      font-weight: 600;
      font-size: 1.6em;
      margin: ${headerMargin};
    `,
    h4: theme => css`
      font-weight: 600;
      font-size: 1.4em;
      margin: ${headerMargin};
    `,
    h5: theme => css`
      font-weight: 500;
      font-size: 1.2em;
      margin: ${headerMargin};
    `,
    h6: theme => css`
      font-weight: 500;
      font-size: 1em;
      margin: ${headerMargin};
    `,
    div: theme => css`
      font-weight: 400;
      font-size: 1em;
    `,
    span: theme => css`
      font-weight: 400;
      font-size: 1em;
    `,
    p: theme => css`
      font-weight: 400;
      font-size: 1em;
    `,
    strong: theme => css`
      font-weight: 500;
      font-size: 1em;
    `,
    b: theme => css`
      font-weight: 700;
      font-size: 1em;
    `,
    code: theme => css`
      font-family: Source Code Pro, Menlo, Consolas, Liberation Mono, monospace;
    `,
    em: theme => css`
      font-style: italic;
    `,
    blockquote: theme => css`
      padding-left: 16px;
      font-style: italic;
      border-left: 2px solid ${theme.colors.text.secondary[theme.mode]};
      color: ${theme.colors.text.secondary[theme.mode]};
      overflow-wrap: break-word;
      margin: 16px;
    `,
    pre: theme => css`
    `,
    i: theme => css`
      font-style: italic;
    `,
    del: theme => css`
      text-decoration: line-through;
    `,
};

const getTextColor = (theme: BinuiTheme, color: StyledTextProps['color']): string => {
    if (!color) {
        return 'inherit';
    }
    if (color === 'primary') {
        return theme.colors.primary[theme.mode];
    }
    if (color === 'textPrimary') {
        return theme.colors.text.primary[theme.mode];
    }
    if (color === 'textSecondary') {
        return theme.colors.text.secondary[theme.mode];
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
