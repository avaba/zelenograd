import "expose-loader?$!jquery";
import "expose-loader?jQuery!jquery";
require("slick-carousel");
// var $ = require('jquery');
require('fancybox')($);
// polyfills
import "core-js/features/object/assign";
import "core-js/features/string/repeat";
import "core-js/features/string/pad-start";
import "core-js/features/string/pad-end";
import "core-js/features/global-this";

import "./includes/header";
import "./includes/footer";
import "./includes/stock";
import "./includes/tabs";
import "./includes/repair";
import "./includes/infrastructure";
import "./includes/layouts";
import "./includes/count";
import "./includes/pay-calc";
import "./includes/map";

import "./modules/validate";
import "./modules/modals";


// import './blocks/page';
