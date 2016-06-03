import QUnit from 'steal-qunit';
import { ViewModel } from './tooltip';

// ViewModel unit tests
QUnit.module('my-app/bootstrap/tooltip');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the bootstrap-tooltip component');
});
