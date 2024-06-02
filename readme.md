# Tiny Colors

A tiny library providing the basic ANSI colors for the terminal.

## Install

```sh
npm install --save tiny-colors
```

## Colors

The following color functions are provided.

| Foreground | Background  | Modifiers       |
| ---------- | ----------- | --------------- |
| `black`    | `bgBlack`   | `reset`         |
| `red`      | `bgRed`     | `bold`          |
| `green`    | `bgGreen`   | `dim`           |
| `yellow`   | `bgYellow`  | `italic`        |
| `blue`     | `bgBlue`    | `underline`     |
| `magenta`  | `bgMagenta` | `overline`      |
| `cyan`     | `bgCyan`    | `inverse`       |
| `white`    | `bgWhite`   | `hidden`        |
| `gray`     | `bgGray`    | `strikethrough` |

## Usage

```ts
import colors, {ENABLED} from 'tiny-colors';

// Unchained usage

console.log ( colors.bgMagenta ( colors.italic ( 'foo' ) ) );

// Chained usage

console.log ( colors.bgMagenta.italic ( 'foo' ) );

// Check if colors will actually be displayed

console.log ( ENABLED ); // => true/false
```

## License

MIT © Fabio Spampinato
