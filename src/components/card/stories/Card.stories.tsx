import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../text';
import Card, { CARD_COMPONENTS } from '../Card';

export default {
    title: 'components/Card',
    component: Card,
    argTypes: {
        as: {
            options: CARD_COMPONENTS,
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args => <Card {...args}/>);

export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    children: <Text>와우~ 친구들! 빡빡이 아저씨야</Text>,
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    children: <Text>난 여기서 빠져나가야 되겠어</Text>,
};

export const Raised = Template.bind({});
Raised.args = {
    variant: 'raised',
    children: <Text>붕 뜬 기분이다</Text>,
};