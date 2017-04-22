import prod from './Root.prod';
import dev from './Root.dev';

export default process.env.NODE_ENV === 'production' ? prod : dev;
