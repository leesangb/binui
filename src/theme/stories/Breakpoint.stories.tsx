import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { css, ThemeProps } from 'styled-components';
import { BinuiTheme } from '../BinuiTheme';
import useBreakpoints from '../useBreakpoints';
import useDimensions from '../useDimensions';

const Test = styled.div(
    ({ theme }: ThemeProps<BinuiTheme>) => css`
      color: ${theme.palette.text.primary};

      ${theme.breakpoints.up('lg')} {
        font-size: 20px;
      }

      ${theme.breakpoints.down('lg')} {
        font-size: 18px;
      }

      ${theme.breakpoints.down('md')} {
        font-size: 16px;
      }

      ${theme.breakpoints.down('sm')} {
        font-size: 14px;
      }

      ${theme.breakpoints.down('xs')} {
        font-size: 12px;
      }
    `,
);

export default {
    title: 'example/Breakpoint',
    component: Test,
} as ComponentMeta<typeof Test>;

const Dimension = () => {
    const { width, height } = useDimensions();
    const { current } = useBreakpoints();

    return <>{current} {width} * {height}</>;
};

export const Example: ComponentStory<typeof Test> = (args: any) => (
    <Test>
        <Dimension/>
    </Test>
);