import { connect } from 'react-redux';
import R from '_utils/ramda';

import CounterSection from './CounterSection';

const mapStateToProps = R.pick(['counter']);

export default connect(mapStateToProps)(CounterSection);
