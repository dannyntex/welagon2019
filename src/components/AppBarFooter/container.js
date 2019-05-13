import {connect} from 'src/drivers'
import AppBarFooter from './appbarfooter'
import { toggleDrawer } from 'src/actions/app';


const mapStateToProps = ({app}) => (app)
const mapDispatchToProps = dispatch => (
  {
    ToggleNav:(nav)=>(dispatch(toggleDrawer(nav)))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppBarFooter);
