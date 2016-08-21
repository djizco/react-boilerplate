import prod from './Root.prod';
import dev from './Root.dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = dev;
}
