
/* IMPORT */

import * as tty from 'tty';

/* MAIN */

const ENV = process.env || {};
const ARGV = process.argv || [];

const IS_DISABLED = ( 'NO_COLOR' in ENV ) || ARGV.includes ( '--no-color' );
const IS_FORCED = ( 'FORCE_COLOR' in ENV ) || ARGV.includes ( '--color' );
const IS_WINDOWS = ( process.platform === 'win32' );
const IS_COMPATIBLE_TTY = tty.isatty ( 1 ) && ENV.TERM && ENV.TERM !== 'dumb';
const IS_CI = ( 'CI' in ENV ) && ( 'GITHUB_ACTIONS' in ENV || 'GITLAB_CI' in ENV || 'CIRCLECI' in ENV );
const IS_ENABLED = !IS_DISABLED && ( IS_FORCED || IS_WINDOWS || IS_COMPATIBLE_TTY || IS_CI );

/* EXPORT */

export {IS_ENABLED};
