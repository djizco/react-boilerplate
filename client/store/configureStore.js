import prod from './configureStore.prod';
import dev from './configureStore.dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}
