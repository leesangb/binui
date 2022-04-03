import { useTheme as useStyledTheme } from 'styled-components';
import { BinuiTheme } from './BinuiTheme';

const useTheme = () => {
    return useStyledTheme() as BinuiTheme;
};

export default useTheme;