import { buildPageList } from './pagination';

describe('buildPageList', () => {
    describe('given: page 1, count 30, pageSize 5', () => {
        it('should be [1, 2, 3, 4, 5, 6]', () => {
            const expected = [1, 2, 3, 4, 5, 6];
            const pageList = buildPageList(1, 30, 5);
            expect(pageList).toHaveLength(expected.length);
            expect(pageList).toEqual(expect.arrayContaining(expected));
        });
    });

    describe('given: page 2, count 30, pageSize 3', () => {
        it('should be [1, 2, 3, 4, 5, 6, 7]', () => {
            const expected = [1, 2, 3, 4, 5, 6, 7];
            const pageList = buildPageList(2, 30, 3);
            expect(pageList).toHaveLength(expected.length);
            expect(pageList).toEqual(expect.arrayContaining(expected));
        });
    });

    describe('given: page 7, count 30, pageSize 3', () => {
        it('should be [4, 5, 6, 7, 8, 9, 10]', () => {
            const expected = [4, 5, 6, 7, 8, 9, 10];
            const pageList = buildPageList(7, 30, 3);
            expect(pageList).toHaveLength(expected.length);
            expect(pageList).toEqual(expect.arrayContaining(expected));
        });
    });

    describe('given: page 5, count 30, pageSize 3', () => {
        it('should be [2, 3, 4, 5, 6, 7, 8]', () => {
            const expected = [2, 3, 4, 5, 6, 7, 8];
            const pageList = buildPageList(5, 30, 3);
            expect(pageList).toHaveLength(expected.length);
            expect(pageList).toEqual(expect.arrayContaining(expected));
        });
    });

    describe('given: page 1, count 5, pageSize 3', () => {
        it('should be [1, 2]', () => {
            const expected = [1, 2];
            const pageList = buildPageList(1, 5, 3);
            expect(pageList).toHaveLength(expected.length);
            expect(pageList).toEqual(expect.arrayContaining(expected));
        });
    });

    describe('given: page 6, count 10, pageSize 1', () => {
        it('should be [3, 4, 5, 6, 7, 8, 9]', () => {
            const expected = [3, 4, 5, 6, 7, 8, 9];
            const pageList = buildPageList(6, 10, 1);
            expect(pageList).toHaveLength(expected.length);
            expect(pageList).toEqual(expect.arrayContaining(expected));
        });
    });

    describe('given: page 10, count 10, pageSize 1', () => {
        it('should be [4, 5, 6, 7, 8, 9, 10]', () => {
            const expected = [4, 5, 6, 7, 8, 9, 10];
            const pageList = buildPageList(10, 10, 1);
            expect(pageList).toHaveLength(expected.length);
            expect(pageList).toEqual(expect.arrayContaining(expected));
        });
    });
});