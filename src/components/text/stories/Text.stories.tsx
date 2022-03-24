import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from '../Text';

export default {
    title: 'components/Text',
    component: Text,
    argTypes: {
        as: {
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'p'],
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args => <Text {...args}/>);

export const Default = Template.bind({});
Default.args = {
    children: 'Hot pink보다 진한 보라색을 더 좋아해',
};