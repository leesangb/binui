import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from '../Text';

const children = 'Hot pink보다 진한 보라색을 더 좋아해';

export default {
    title: 'components/Text',
    component: Text,
    argTypes: {
        as: {
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'p', 'strong', 'b'],
            control: {
                type: 'select',
            },
        },
        variant: {
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'p', 'strong', 'b'],
            control: {
                type: 'select',
            },
        },
        color: {
            control: {
                type: 'text',
            },
        },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args => <Text {...args}/>);

export const Default = Template.bind({});
Default.args = {
    children,
};
export const H1 = Template.bind({});
H1.args = {
    as: 'h1',
    children,
};
export const H2 = Template.bind({});
H2.args = {
    as: 'h2',
    children,
};
export const H3 = Template.bind({});
H3.args = {
    as: 'h3',
    children,
};
export const H4 = Template.bind({});
H4.args = {
    as: 'h4',
    children,
};
export const H5 = Template.bind({});
H5.args = {
    as: 'h5',
    children,
};
export const H6 = Template.bind({});
H6.args = {
    as: 'h6',
    children,
};
export const Div = Template.bind({});
Div.args = {
    as: 'div',
    children,
};
export const Span = Template.bind({});
Span.args = {
    as: 'span',
    children,
};
export const Strong = Template.bind({});
Strong.args = {
    as: 'strong',
    children,
};
export const B = Template.bind({});
B.args = {
    as: 'b',
    children,
};

