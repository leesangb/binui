import { BinuiTheme, createBinuiTheme } from './BinuiTheme';

describe('createBinuiTheme', () => {
    describe('given override object', () => {
        it('should merge with override', function () {
            const override: Partial<BinuiTheme> = {
                mode: 'dark',
            };
            const theme = createBinuiTheme(override);
            expect(theme.mode).toEqual(override.mode);
        });
    });
});