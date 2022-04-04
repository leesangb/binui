import { darken, lighten } from 'polished';
import { HTMLAttributes } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { BinuiTheme, BinuiThemeMode } from '../../theme';

type CardVariant = 'default' | 'outlined' | 'raised';

export const CARD_COMPONENTS = [
    'div', 'main', 'article', 'section', 'aside', 'body', 'details',
] as const;

type CardComponentType = typeof CARD_COMPONENTS[number];

interface StyledBinuiCardProps {
    variant?: CardVariant;
}

interface BinuiCardProps extends StyledBinuiCardProps, HTMLAttributes<HTMLDivElement> {
    as: CardComponentType;
}

const invertDarken: Record<BinuiThemeMode, (amount: string | number, color: string) => string> = {
    dark: lighten,
    light: darken,
};


const cardVariants: Record<CardVariant, (theme: BinuiTheme) => FlattenSimpleInterpolation> = {
    default: theme => css`
    `,
    outlined: theme => css`
      border: 1px solid ${theme.colors.border[theme.mode]};

      &:hover {
        border: 1px solid ${invertDarken[theme.mode](0.15, theme.colors.border[theme.mode])};
      }
    `,
    raised: theme => css`
      box-shadow: ${`1px 1px 5px 0px ${darken(0.15, theme.colors.background[theme.mode])}`};

      &:hover {
        box-shadow: ${`3px 3px 8px 0px ${darken(0.15, theme.colors.background[theme.mode])}`};

      }
    `,
};

const cardStyles = ({ theme }: { theme: BinuiTheme }) => css`
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.paper[theme.mode]};
  padding: 8px;
  transition: all 0.25s;
`;

const cardVariantStyles = ({ variant, theme }: StyledBinuiCardProps & { theme: BinuiTheme }) =>
    cardVariants[variant || 'default'](theme);

const StyledCard = styled.div<StyledBinuiCardProps>(
    cardStyles,
    cardVariantStyles,
);

const Card = ({ as = 'div', variant, ...divProps }: BinuiCardProps) => {
    return <StyledCard as={as} variant={variant} {...divProps}/>;
};

Card.defaultProps = {
    variant: 'default',
    as: 'div',
};

export default Card;