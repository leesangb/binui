import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from '../../text/Text';
import Card from '../Card';

export default {
    title: 'components/Card',
    component: Card,

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args => <Card {...args}/>);

export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    children: <Text>크하하항</Text>,
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    children: <Text>크하하항</Text>,
};

export const Raised = Template.bind({});
Raised.args = {
    variant: 'raised',
    children: <Text>크하하항</Text>,
};