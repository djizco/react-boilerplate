import prod from './configureStore.prod';
import dev from './configureStore.dev';

const isProd = process.env.NODE_ENV === 'production';

export default isProd ? prod : dev;
