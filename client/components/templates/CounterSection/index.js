import { connect } from 'react-redux';
import * as R from 'ramda';

import CounterSection from './CounterSection';

const mapStateToProps = R.pick(['counter']);

export default connect(mapStateToProps)(CounterSection);
