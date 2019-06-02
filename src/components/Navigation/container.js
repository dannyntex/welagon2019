import {connect} from 'src/drivers'
import Navigation from './navigation'
import { toggleDrawer } from 'src/actions/app';
import {addPrevCategory,getTitleCategory} from 'src/actions/catalog';

const mapStateToProps = ({app,catalog}) => {
  const {drawer} = app;
  const {prevCategory,titleCategory} = catalog;
  return {
        titleCategory,
        prevCategory,
        drawer
      }
}
const mapDispatchToProps = {
  getTitleCategory,
  addPrevCategory,
  toggleDrawer,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
