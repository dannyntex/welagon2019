import {connect} from 'src/drivers'
import CatHomepage from './catHomepage'

const mapStateToProps = ({catalog}) => {
  const {rootId} = catalog;
  return {
        rootId
      }
}

export default connect(
  mapStateToProps,
  null
)(CatHomepage)
