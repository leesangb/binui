# binui 리액트 컴포넌트 라이브러리

## Installation

```shell
npm install @leesangb/binui
```

### Peer dependencies

```shell
npm install styled-components
```

## Usage

```typescript jsx
import { BinuiThemeProvider, createBinuiTheme, Button } from '@leesangb/binui';

const theme = createBinuiTheme();

const ChildComponent = () => {
    return (
        <>
            <Button label={'안녕 친구들!'} onClick={() => alert('클릭!')}/>
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

## Development

```shell
npm run storybook
```