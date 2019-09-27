import configureStore from '_store/configureStore';
import history from '_client/history';

const { store, persistor } = configureStore(history);

export default { store, persistor };
