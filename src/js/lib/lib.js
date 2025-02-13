import $ from './core.js';

import actions from './modules/actions.js'
import display from './modules/display.js';
import classes from './modules/classes.js';
import handlers from './modules/handlers.js';

actions($);
display($);
classes($);
handlers($);

export default $;
