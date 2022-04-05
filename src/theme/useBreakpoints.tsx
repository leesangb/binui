import { useTheme } from './index';
import useDimensions from './useDimensions';

const useBreakpoints = () => {
    const { width } = useDimensions();
    const { breakpoints: { xs, sm, md, lg, xl } } = useTheme();
    const xsDown = width <= xs;
    const xsUp = width > xs;
    const smDown = width <= sm;
    const smUp = width > sm;
    const mdDown = width <= md;
    const mdUp = width > md;
    const lgDown = width <= lg;
    const lgUp = width > lg;
    const xlDown = width <= xl;
    const xlUp = width > xl;

    return {
        xsDown,
        xsUp,
        smDown,
        smUp,
        mdDown,
        mdUp,
        lgDown,
        lgUp,
        xlDown,
        xlUp,
        current: xsDown ? 'xs' : smDown ? 'sm' : mdDown ? 'md' : lgDown ? 'lg' : 'xl',
    };
};

export default useBreakpoints;