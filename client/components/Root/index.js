import prod from './Root.prod';
import dev from './Root.dev';

const isProd = process.env.NODE_ENV === 'production';

export default isProd ? prod : dev;
