import { CSSProperties, PropsWithChildren } from 'react';
import styled, { css, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';
import { BinuiTheme } from '../../theme';

const components = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'strong', 'b'] as const;
type TextComponentType = typeof components[number];

const defaultComponent: TextComponentType = 'p';

interface StyledTextProps {
    variant?: TextComponentType;
    color?: CSSProperties['color'] | 'primary' | 'textPrimary' | 'textSecondary';
}

interface BinuiTextProps<T extends TextComponentType | undefined> extends StyledTextProps {
    as?: T;
}

type TextProps<T extends TextComponentType | undefined> = BinuiTextProps<T> & JSX.IntrinsicElements[NonNullable<T>]


const styleMapping: Record<TextComponentType, (theme: BinuiTheme) => FlattenSimpleInterpolation> = {
    h1: theme => css`
      font-weight: 700;
      font-size: 2em;
    `,
    h2: theme => css`
      font-weight: 700;
      font-size: 1.8em;
    `,
    h3: theme => css`
      font-weight: 600;
      font-size: 1.6em;
    `,
    h4: theme => css`
      font-weight: 600;
      font-size: 1.4em;
    `,
    h5: theme => css`
      font-weight: 500;
      font-size: 1.2em;
    `,
    h6: theme => css`
      font-weight: 500;
      font-size: 1em;
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
};

const getTextColor = (theme: BinuiTheme, color: StyledTextProps['color']): string => {
    if (color === 'primary') {
        return theme.colors.primary[theme.mode];
    }
    if (!color || color === 'textPrimary') {
        return theme.colors.text.primary[theme.mode];
    }
    if (color === 'textSecondary') {
        return theme.colors.text.secondary[theme.mode];
    }
    return color;
};


const textStyle = ({ theme, color }: StyledTextProps & ThemeProps<BinuiTheme>) => css`
  color: ${getTextColor(theme, color)};
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
