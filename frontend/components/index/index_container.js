import { connect } from 'react-redux';
import { fetchStoris } from '../../actions/storis';
import Index from './index';

const mapStateToProps = ({ storis }) => ({
  storis: storis.storis,
});

const mapDispatchToProps = dispatch => ({
  fetchStoris: () => dispatch(fetchStoris()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
