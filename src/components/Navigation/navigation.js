import React,{Component} from 'react';
import PropTypes from 'prop-types';
import CategoryTree from './categoryTree';
import Classify from 'src/classify'
import defaultClasses from './navigation.css'


class Navigation extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      openSideNav: PropTypes.string,
      sideNav:PropTypes.string,
    }),
    drawer:PropTypes.bool,
  }
  render(){
    const {classes,drawer,toggleDrawer} = this.props;
    console.log(this.props)
    const isOpenNav = drawer ? classes.openSideNav : classes.sideNav;
    return (
      <aside  className={isOpenNav}>
        <ul className={classes.body}>
          <CategoryTree
            toggleDrawer={toggleDrawer}
            drawer={drawer}
            />
        </ul>
      </aside>

    )
  }
}
export default Classify(defaultClasses)(Navigation);
