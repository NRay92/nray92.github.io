import $ from 'jquery';
import 'slick-carousel';
import '@fancyapps/fancybox';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';
import './js/jquery.easytabs.min';
import './js/jquery.fullPage.min';

import {burgerSwitcher} from './js/burger-switcher.js';
import {modalSwitcher} from './js/modal-switcher.js';
import {cutLongText} from './js/cut-long-text.js';

import './js/script';

import './scss/main.scss';


burgerSwitcher();
modalSwitcher();
cutLongText();