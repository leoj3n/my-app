import Component from 'can-component';
import DefineMap from 'can-define/map/';
import route from "can-route";
import './navigation.less';
import template from './navigation.stache';

export const ViewModel = DefineMap.extend({
  pages: {
    get: function() {
      return [
        { name: "Home",
          url: '/',
          active: this.isActive('home') },
        { name: "Photos",
          url: 'photo',
          active: this.isActive('photo') },
        { name: "Video",
          url: 'video',
          active: this.isActive('video') },
        { name: "Floorplan",
          url: 'plan',
          active: this.isActive('plan') },
        { name: "Community",
          url: 'community',
          active: this.isActive('community') },
        { name: "Overview",
          url: 'overview',
          active: this.isActive('overview') },
        { name: "Improvements",
          url: 'improvement',
          active: this.isActive('improvement') },
        { name: "Contact",
          url: 'contact',
          active: this.isActive('contact') }
      ];
    }
  },
  isActive: function(check) {
    return route.current({ page: check });
  }
});

export default Component.extend({
  tag: 'app-navigation',
  ViewModel: ViewModel,
  template
});
