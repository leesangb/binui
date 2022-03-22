import { ComponentMeta, ComponentStory } from '@storybook/react';
import LinkButton from '../LinkButton';

export default {
    title: 'components/LinkButton',
    component: LinkButton,
    argTypes: {
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
        href: {
            control: {
                type: 'text',
            },
            defaultValue: '#',
        },
    },
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: '나는 그냥 링크 버튼이야',
    size: 'medium',
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: '나는 경계선이 있는 링크 버튼이야',
    variant: 'outlined',
};

export const Contained = Template.bind({});
Contained.args = {
    label: '나는 채워져 있는 링크 버튼이야',
    variant: 'contained',
};