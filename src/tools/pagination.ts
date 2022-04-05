export const buildPageList = (page: number, count: number, pageSize: number, maxPageCount: number = 7): number[] => {
    const pageCount = Math.ceil(count / pageSize);
    const nbPage = Math.min(pageCount, maxPageCount);

    let left = Math.floor(nbPage / 2) - ((nbPage + 1) % 2);
    let right = Math.floor(nbPage / 2);
    if (page <= left) {
        const tmp = left + 1 - page;
        left -= tmp;
        right += tmp;
    } else if (page + right >= pageCount) {
        const tmp = page + right - pageCount;
        left += tmp;
        right -= tmp;
    }

    const pages = [];
    for (let i = left; i > 0; i--) {
        pages.push(page - i);
    }
    pages.push(page);
    for (let i = 1; i <= right; i++) {
        pages.push(page + i);
    }

    return pages;
};