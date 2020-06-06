import 'expose-loader?$!jquery';
import 'expose-loader?jQuery!jquery';

// polyfills
import 'core-js/features/object/assign';
import 'core-js/features/string/repeat';
import 'core-js/features/string/pad-start';
import 'core-js/features/string/pad-end';
import 'core-js/features/global-this';

import './includes/header';
import './includes/footer';
import './includes/count';
import './includes/stock';
import './includes/tabs';

import "./modules/validate";

require("slick-carousel");

// import './blocks/page';