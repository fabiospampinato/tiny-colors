
/* MAIN */

type Modifier = ( string: string ) => string;

type ChainedModifier = Modifier & Modifiers;

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

export type {Modifier, ChainedModifier, Modifiers};
