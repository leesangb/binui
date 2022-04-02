import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PropsWithChildren } from 'react';
import Link from '../Link';

export default {
    title: 'components/Link',
    component: Link,

} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args => <Link {...args}/>);

export const Default = Template.bind({});
Default.args = {
    href: '#',
    children: '바로가기',
};

const AnotherLink = ({ href, customProps }: PropsWithChildren<{ href: string, customProps: string }>) => {
    return <a href={href}>{customProps}</a>;
};

export const AsCustomComponent = Template.bind({});
AsCustomComponent.args = {
    as: AnotherLink,
    href: '#',
    customProps: '나는 커스텀 컴포넌트의 props야',
};