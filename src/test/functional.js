import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('my-app functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('my-app main page shows up', function() {
  F('title').text('my-app', 'Title is set');
});
