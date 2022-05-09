import { useContext } from 'react';
import { useTheme as useStyledTheme } from 'styled-components';
import { BinuiTheme } from './BinuiTheme';
import { BinuiThemeContext } from './BinuiThemeProvider';

const useBinuiTheme = () => {
    const theme: BinuiTheme = useStyledTheme() as BinuiTheme;
    const { invertMode, setMode } = useContext(BinuiThemeContext);
    return { theme, invertMode, setMode };
};

export default useBinuiTheme;