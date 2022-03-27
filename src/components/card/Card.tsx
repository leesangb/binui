import { darken } from 'polished';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { BinuiTheme } from '../../theme';

const StyledCard = styled.div(({ theme }: { theme: BinuiTheme }) => css`
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.paper[theme.mode]};
  box-shadow: ${`1px 1px 5px 0px ${darken(0.15, theme.colors.background[theme.mode])}`};

  padding: 8px;
  transition: all 0.25s;

  &:hover {
    box-shadow: ${`3px 3px 8px 0px ${darken(0.15, theme.colors.background[theme.mode])}`};

  }
`);

const Card = ({ ...divProps }: HTMLAttributes<HTMLDivElement>) => {
    return <StyledCard {...divProps}/>;
};

export default Card;