import {connect} from 'src/drivers'
import AppBarFooter from './appbarfooter'
import { toggleDrawer } from 'src/actions/app';


const mapStateToProps = ({app}) => (app)
const mapDispatchToProps = { toggleDrawer}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppBarFooter);
