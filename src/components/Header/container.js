import {connect} from 'src/drivers'
import Header from './header'
import { toggleSideNav } from 'src/actions/header';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
  {
    openNav: () => (
      dispatch(toggleSideNav('nav'))
    )
  }
)

export default connect(
  null,
  mapDispatchToProps,
)(Header);
