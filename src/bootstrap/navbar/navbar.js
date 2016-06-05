import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './navbar.less';
import template from './navbar.stache';

import $ from "jquery";
import "my-app/bootstrap/css/nav.css";
import "my-app/bootstrap/css/navbar.css";
import "my-app/bootstrap/css/animation.css";
import "bootstrap/dist/js/umd/collapse";

export const ViewModel = DefineMap.extend({});

export default Component.extend({
  tag: 'bootstrap-navbar',
  ViewModel: ViewModel,
  template
});
