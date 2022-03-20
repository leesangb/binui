import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../Button';

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'select',
            },
        },
        size: {
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: '나는 그냥 버튼이야',
    variant: 'default',
    size: 'medium',
    onClick: () => alert('아야!'),
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: '나는 경계선이 있는 버튼이야',
    size: 'medium',
    variant: 'outlined',
};

export const Contained = Template.bind({});
Contained.args = {
    label: '나는 채워져 있는 버튼이야',
    size: 'medium',
    variant: 'contained',
};