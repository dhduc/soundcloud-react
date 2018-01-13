import {connect} from 'react-redux';
import TrackList from './TrackList';
import {auth} from '../../actions';

export default connect(({tracks}) => ({tracks}), {auth})(TrackList);
