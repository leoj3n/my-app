import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './home.less';
import template from './home.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'Hover the'
  }
});

export default Component.extend({
  tag: 'app-home',
  ViewModel: ViewModel,
  template
});
