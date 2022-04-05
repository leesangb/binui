import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../Button';

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {
        as: {
            options: ['a', 'button'],
            defaultValue: 'button',
        },
        variant: {
            control: {
                type: 'select',
            },
            defaultValue: 'default',
        },
        size: {
            control: {
                type: 'select',
            },
            defaultValue: 'medium',
        },
        weight: {
            control: {
                type: 'text',
            },
            defaultValue: '500',
        },
        color: {
            control: {
                type: 'color'
            }
        },
        onClick: {
            action: 'clicked',
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button  {...args}/>;


export const Default = Template.bind({});
Default.args = {
    children: '나는 그냥 버튼이야',
    variant: 'default',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: '나는 경계선이 있는 버튼이야',
    variant: 'outlined',
};

export const Contained = Template.bind({});
Contained.args = {
    children: '나는 채워져 있는 버튼이야',
    variant: 'contained',
};

export const DefaultLink = Template.bind({});
DefaultLink.args = {
    children: '나는 그냥 링크 버튼이야',
    size: 'medium',
    as: 'a',
    href: '#',
};

export const OutlinedLink = Template.bind({});
OutlinedLink.args = {
    children: '나는 경계선이 있는 링크 버튼이야',
    variant: 'outlined',
    as: 'a',
    href: '#',
};

export const ContainedLink = Template.bind({});
ContainedLink.args = {
    children: '나는 채워져 있는 링크 버튼이야',
    variant: 'contained',
    as: 'a',
    href: '#',
};