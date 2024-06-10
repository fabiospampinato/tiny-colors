
/* MAIN */

const ENV = globalThis.process?.env || {};
const ARGV = globalThis.process?.argv || [];

const ENABLED = !( 'NO_COLOR' in ENV ) && ( ENV.COLOR !== '0' ) && ( ENV.TERM !== 'dumb' ) && !ARGV.includes ( '--no-color' ) && !ARGV.includes ( '--no-colors' ) && ( ENV.COLOR === '1' || !globalThis.process?.stdout || globalThis.process?.stdout?.isTTY === true );

/* EXPORT */

export {ENABLED};
