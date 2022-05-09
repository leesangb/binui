import { useMemo } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import { TEXT_COMPONENTS } from '../components/text/Text';
import { BinuiTheme } from './BinuiTheme';
import useBinuiTheme from './useBinuiTheme';

const GlobalStyle = createGlobalStyle(
    ({ theme }: { theme: BinuiTheme }) => css`
      body {
        background-color: ${theme.palette.background};
        font-size: 16px;
      }

      ${TEXT_COMPONENTS.join(',')}, li, ul, ol, td, table, tr, th, a, button {
        margin: 0;
      }
    `,
);

const BinuiGlobalStyle = () => {
    const { theme } = useBinuiTheme();
    return useMemo(() => <GlobalStyle theme={theme}/>, [theme]);
};

export default BinuiGlobalStyle;