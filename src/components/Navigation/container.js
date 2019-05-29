import {connect} from 'src/drivers'
import Navigation from './navigation'
import { toggleDrawer } from 'src/actions/app';

const mapStateToProps = ({app}) => {
  const {drawer} = app
  return {
        drawer
      }
}
const mapDispatchToProps = { toggleDrawer}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
