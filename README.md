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
import { BinuiThemeProvider, Button } from '@leesangb/binui';

const ChildComponent = () => {
    return (
        <>
            <Button label={'안녕 친구들!'} onClick={() => alert('클릭!')}/>
        </>
    )
}

const App = () => {
    return (
        <BinuiThemeProvider mode={'light'/* light | dark */}
                            overrides={{/* OverridableBinuiThemeCollection */ }}>
            {/* ... */}
            <ChildComponent/>
        </BinuiThemeProvider>
    )
}
```

### Overridable theme

```ts
type OverridableBinuiPalette = Partial<Omit<BinuiPalette, 'text'>> & { text?: Partial<Pick<BinuiPalette, 'text'>> };

type OverridableBinuiBreakpoints = Partial<Omit<BinuiBreakpoints, 'up' | 'down'>>

interface OverridableBinuiThemeCollection {
    light?: OverridableBinuiPalette;
    dark?: OverridableBinuiPalette;
    borderRadius?: string;
    breakpoints?: OverridableBinuiBreakpoints;
}
```

## Development

```shell
npm run storybook
```

## Preview

[Storybook](https://binui.leesangbin.com)
