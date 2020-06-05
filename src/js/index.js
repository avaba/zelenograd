import 'expose-loader?$!jquery';
import 'expose-loader?jQuery!jquery';
require("slick-carousel");
// polyfills
import 'core-js/features/object/assign';
import 'core-js/features/string/repeat';
import 'core-js/features/string/pad-start';
import 'core-js/features/string/pad-end';
import 'core-js/features/global-this';

import './includes/header';
import './includes/footer';
import './includes/repair';
import './includes/infrastructure';

import "./modules/validate";
import "./modules/common";



// import './blocks/page';