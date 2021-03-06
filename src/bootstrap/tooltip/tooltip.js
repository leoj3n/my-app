import Component from "can-component";
import DefineMap from "can-define/map/";
import template from "./tooltip.stache";
import $ from "jquery";
import "bootstrap/dist/js/umd/tooltip";
import "./../css/tooltip.css";
import "./tooltip.less";

export const ViewModel = DefineMap.extend({
  message: {
    value: 'Good Job!'
  }
});

export default Component.extend({
  tag: 'bootstrap-tooltip',
  events: {
    inserted: function() {
      $(this.element).find('[data-toggle="tooltip"]').tooltip();
    }
  },
  ViewModel: ViewModel,
  template
});
