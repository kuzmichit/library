import $ from './core.js';

import actions from './modules/actions.js'
import display from './modules/display.js';
import classes from './modules/classes.js';
import handlers from './modules/handlers.js';
import effects from './modules/effects.js';
import dropdown from './components/dropdown.js';

actions($);
display($);
classes($);
handlers($);
effects($);
dropdown($);

export default $;
