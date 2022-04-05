import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useCallback, useState } from 'react';
import { Button } from '../../button';
import { Card } from '../../card';
import { Text } from '../../text';
import PaginatedList from '../PaginatedList';
import Pagination from '../Pagination';

export default {
    title: 'components/PaginatedList',
    component: PaginatedList,
} as ComponentMeta<typeof PaginatedList>;

const items = new Array(100).fill(0).map((_, i) => ({ id: i, data: `item ${i + 1}` }));

const Demo = () => {
    const [page, setPage] = useState<number>(1);
    const pageSize = 5;
    const itemRenderer = useCallback((item: { id: number, data: string }) => (
        <Card variant={'outlined'}>
            <Text>{item.data}</Text>
        </Card>
    ), []);

    const pageButtonRenderer = useCallback((pageNumber: number) => (
        <Button variant={page === pageNumber ? 'contained' : 'outlined'}
                onClick={() => setPage(pageNumber)}>
            {pageNumber}
        </Button>
    ), [page]);

    return (
        <>
            <PaginatedList render={itemRenderer}
                           items={items}
                           page={page}
                           pageSize={pageSize}
                           getKey={item => item.id.toString()}/>
            <Pagination page={page} pageSize={pageSize} count={items.length}
                        renderPageButton={pageButtonRenderer}/>
        </>
    );
};

export const Example: ComponentStory<typeof PaginatedList> = (args => (
    <Demo/>
));