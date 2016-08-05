import prod from './Root.prod.js';
import dev from './Root.dev.js';

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}
