import { PropsWithChildren, useState } from 'react';
import { Button } from '../index';
import { createBinuiTheme } from './BinuiTheme';
import { BinuiThemeProvider } from './index';

const BinuiThemeLayout = ({ children }: PropsWithChildren<{}>) => {
    const [mode, setMode] = useState<'dark' | 'light'>('light');
    return (
        <BinuiThemeProvider theme={createBinuiTheme({ mode })}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button label={`${mode} 모드`} onClick={() => setMode(mode => mode === 'light' ? 'dark' : 'light')}/>
            </div>
            {children}
        </BinuiThemeProvider>
    );
};

export default BinuiThemeLayout;