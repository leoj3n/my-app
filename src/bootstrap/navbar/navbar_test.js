import QUnit from 'steal-qunit';
import { ViewModel } from './navbar';

// ViewModel unit tests
QUnit.module('my-app/bootstrap/navbar');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the bootstrap-navbar component');
});
