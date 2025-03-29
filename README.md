# react-copy-to-clipboard-ts

This package is a fork of [react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard). The main differences are:

- React 18 compatibility
- TypeScript support
- ESM and CommonJS support
- Zero dependencies (except `copy-to-clipboard`)
- Simple and lightweight

## Features

- React 18 compatible
- TypeScript support
- ESM and CommonJS support
- Zero dependencies (except `copy-to-clipboard`)
- Simple and lightweight

## Installation

```bash
npm install react-copy-to-clipboard-ts
# or
yarn add react-copy-to-clipboard-ts
```

## Usage

```tsx
import { CopyToClipboard } from "react-copy-to-clipboard-ts";

function App() {
  return (
    <CopyToClipboard text="Text to copy">
      <button type="button">Copy to clipboard</button>
    </CopyToClipboard>
  );
}
```

## Props

| Prop   | Type                                    | Description                                               |
| ------ | --------------------------------------- | --------------------------------------------------------- |
| text   | string                                  | Text to copy to clipboard                                 |
| onCopy | (text: string, result: boolean) => void | Callback function that will be called when text is copied |

## Development

```bash
# Install dependencies
yarn install

# Run tests
yarn test

# Run linting
yarn lint

# Format code
yarn format

# Build
yarn build

# Run demo
yarn demo:dev
```

## License

MIT
