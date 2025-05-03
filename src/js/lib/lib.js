import $ from './core.js';

import dropdown from './components/dropdown.js';
import modal from './components/modal.js';
import actions from './modules/actions.js';
import classes from './modules/classes.js';
import display from './modules/display.js';
import effects from './modules/effects.js';
import handlers from './modules/handlers.js';

actions($);
display($);
classes($);
handlers($);
effects($);
dropdown($);
modal($);

export default $;
