import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './photos.less';
import template from './photos.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the app-photos component'
  }
});

export default Component.extend({
  tag: 'app-photos',
  ViewModel: ViewModel,
  template
});
