
/* MAIN */

type ChainedModifier = Modifier & Modifiers;

type ColorModifier = 'reset' | 'bold' | 'dim' | 'italic' | 'underline' | 'overline' | 'inverse' | 'hidden' | 'strikethrough';
type ColorForeground = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';
type ColorBackground = 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgGray';
type Color = ColorModifier | ColorForeground | ColorBackground;

type Modifier = ( string: string ) => string;

type Modifiers = {
  /* MODIFIERS */
  reset: ChainedModifier,
  bold: ChainedModifier,
  dim: ChainedModifier,
  italic: ChainedModifier,
  underline: ChainedModifier,
  overline: ChainedModifier,
  inverse: ChainedModifier,
  hidden: ChainedModifier,
  strikethrough: ChainedModifier,
  /* FOREGOUND */
  black: ChainedModifier,
  red: ChainedModifier,
  green: ChainedModifier,
  yellow: ChainedModifier,
  blue: ChainedModifier,
  magenta: ChainedModifier,
  cyan: ChainedModifier,
  white: ChainedModifier,
  gray: ChainedModifier,
  /* BACKGROUND */
  bgBlack: ChainedModifier,
  bgRed: ChainedModifier,
  bgGreen: ChainedModifier,
  bgYellow: ChainedModifier,
  bgBlue: ChainedModifier,
  bgMagenta: ChainedModifier,
  bgCyan: ChainedModifier,
  bgWhite: ChainedModifier,
  bgGray: ChainedModifier
};

/* EXPORT */

export type {ChainedModifier, Color, Modifier, Modifiers};
