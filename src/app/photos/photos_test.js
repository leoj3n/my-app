import QUnit from 'steal-qunit';
import { ViewModel } from './photos';

// ViewModel unit tests
QUnit.module('my-app/app/photos');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the app-photos component');
});
