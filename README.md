# binui 리액트 컴포넌트 라이브러리

## Installation

TODO

## Usage

```typescript jsx
import { BinuiThemeProvider, createBinuiTheme, Button } from 'binui';

const theme = createBinuiTheme();

const ChildComponent = () => {
    return (
        <>
            <Button label={'안녕 친구들!'}/>
        </>
    )
}

const App = () => {
    return (
        <BinuiThemeProvider theme={theme}>
            {/* ... */}
            <ChildComponent/>
        </BinuiThemeProvider>
    )
}
```