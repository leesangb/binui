import { PropsWithChildren, useState } from 'react';
import { Button } from '../index';
import { createBinuiTheme } from './BinuiTheme';
import { BinuiThemeProvider } from './index';

const BinuiThemeLayout = ({ children }: PropsWithChildren<{}>) => {
    const [mode, setMode] = useState<'dark' | 'light'>('light');
    return (
        <BinuiThemeProvider theme={createBinuiTheme({ mode })}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    borderBottom: '1px solid #ababab',
                    padding: '4px',
                    marginBottom: '12px',
                }}>
                <span style={{ fontSize: '0.8em', marginRight: '4px' }}>여기는 테마 설정 입니다 →</span>
                <Button size={'small'} label={`${mode} 모드`}
                        onClick={() => setMode(mode => mode === 'light' ? 'dark' : 'light')}/>
            </div>
            {children}
        </BinuiThemeProvider>
    );
};

export default BinuiThemeLayout;