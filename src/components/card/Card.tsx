import { darken } from 'polished';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { BinuiTheme } from '../../theme';

const StyledCard = styled.div(({ theme }: { theme: BinuiTheme }) => css`
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.paper[theme.mode]};
  box-shadow: ${`3px 3px 10px 0px ${darken(0.15, theme.colors.background[theme.mode])}`};
  padding: 8px;
`);

const Card = ({ ...divProps }: HTMLAttributes<HTMLDivElement>) => {
    return <StyledCard {...divProps}/>;
};

export default Card;