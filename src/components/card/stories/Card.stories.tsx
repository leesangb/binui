import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '../Card';

export default {
    title: 'components/Card',
    component: Card,

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args => <Card {...args}/>);

export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    children: '와우~ 친구들! 빡빡이 아저씨야',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    children: '난 여기서 빠져나가야 되겠어',
};

export const Raised = Template.bind({});
Raised.args = {
    variant: 'raised',
    children: '붕 뜬 기분이다',
};