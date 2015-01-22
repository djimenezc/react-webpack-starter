'use strict';

function requireAll(context) {
  context.keys().forEach(context);
}

requireAll(require.context('./app/__tests__', true, /-test\.jsx$/));
