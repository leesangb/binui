import { ReactElement } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { BinuiTheme } from '../../theme';
import { buildPageList } from '../../tools/pagination';

interface PaginationProps {
    /** 1 based current page */
    page: number;
    count: number;
    pageSize: number;
    renderPageButton: (page: number) => ReactElement;
}

const OrderedList = styled.ol`
  list-style-type: none;
  padding: 0;
  text-align: center;
  margin: ${({ theme }: ThemeProps<BinuiTheme>) => theme.spacing(2)};

  li {
    display: inline;
    margin: 4px;
  }
`;

const Pagination = ({ page: currentPage, count, pageSize, renderPageButton }: PaginationProps) => {
    const pageList = buildPageList(currentPage, count, pageSize);

    return (
        <OrderedList>
            {
                pageList.map(page => <li key={Math.random()}>{renderPageButton(page)}</li>)
            }
        </OrderedList>
    );
};

export default Pagination;