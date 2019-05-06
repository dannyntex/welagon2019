import {connect} from 'src/drivers'
import Navigation from './navigation'

import { toggleSideNav } from 'src/actions/header';

const mapStateToProps = ({header}) => {
return header;
};
const mapDispatchToProps = dispatch => (
  {
    closeNav: () => (
      dispatch(toggleSideNav(null))
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
