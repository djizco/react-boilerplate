import prod from './configureStore.prod.js';
import dev from './configureStore.dev.js';

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}
