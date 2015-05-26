import { moduleForModel, test } from 'ember-qunit';

moduleForModel('environment', 'Unit | Model | environment', {
  // Specify the other units that are required for this test.
  needs: ['model:account', 'model:project']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
