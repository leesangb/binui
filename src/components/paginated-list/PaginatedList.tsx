import { ReactElement } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BinuiTheme } from '../../theme';

export interface PaginatedListProps<T extends object> {
    render: (item: T) => ReactElement;
    items: T[];
    /** 1 based current page */
    page: number;
    pageSize: number;
    getKey: (item: T) => string;
}

const OrderedList = styled.ol`
  list-style-type: none;
  padding: 0;

  li {
    margin: ${({ theme }: ThemeProps<BinuiTheme>) => theme.spacing(1)} 0;
  }
`;

const PaginatedList = <T extends object>
({ render, items, getKey, page = 1, pageSize = 7 }: PaginatedListProps<T>) => {
    return (
        <>
            <OrderedList>
                {
                    items.slice((page - 1) * pageSize, page * pageSize)
                        .map(item => (
                            <li key={getKey(item)}>
                                {render(item)}
                            </li>
                        ))
                }
            </OrderedList>
        </>
    );
};

export default PaginatedList;