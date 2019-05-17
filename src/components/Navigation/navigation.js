import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Classify from 'src/classify'
import defaultClasses from './navigation.css'


class Navigation extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      openSideNav: PropTypes.string,
      sideNav:PropTypes.string,
    }),
    drawer:PropTypes.string,

  }

  render(){
    const {classes,drawer} = this.props;
    const isOpenNav = drawer ? classes.openSideNav : classes.sideNav

    return (
      <div  className={isOpenNav}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}
export default Classify(defaultClasses)(Navigation);
