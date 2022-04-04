
/* MAIN */

const ENV = globalThis.process?.env || {};
const ARGV = globalThis.process?.argv || [];

const IS_ENABLED = !( 'NO_COLOR' in ENV ) && !ARGV.includes ( '--no-color' );

/* EXPORT */

export {IS_ENABLED};
