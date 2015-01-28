// TODO: make requireAll() find and require all tests in app/

'use strict';

function requireAll(context) {
  context.keys().forEach(context);
}

requireAll(require.context('./app/components/__tests__', true, /-test\.jsx$/));
