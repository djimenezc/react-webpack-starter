'use strict';

function requireAll(context) {
  context.keys().forEach(context);
}

requireAll(require.context('./components/__tests__', true, /-test\.jsx$/));
