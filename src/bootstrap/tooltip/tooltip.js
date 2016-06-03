import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './tooltip.less!';
import template from './tooltip.stache!';

import 'tether';
import 'bs-tooltip';
import 'my-app/bs-css/tooltip.css';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the bootstrap-tooltip component'
    }
  }
});

export default Component.extend({
  tag: 'bootstrap-tooltip',
  events: {
    inserted: function() {
      $(this.element.find('[data-toggle="tooltip"]')).tooltip();
    }
  },
  viewModel: ViewModel,
  template
});
