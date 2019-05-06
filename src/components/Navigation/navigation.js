import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Classify from 'src/classify'
import defaultClasses from './navigation.css'


class Navigation extends Component {
  static propTypes ={
    classes: PropTypes.shape({
      openSideNav: PropTypes.string,
      sideNav:PropTypes.string,
    }),
    closeNav: PropTypes.func.isRequired

  }

  render(){
    const {classes,drawer,closeNav} = this.props;
    const isOpenNav = drawer ? classes.openSideNav : classes.sideNav
    console.log(isOpenNav)
    return (
      <div  className={isOpenNav}>
        <a
        className="closebtn"
        onClick={closeNav}
        >&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}
export default Classify(defaultClasses)(Navigation);
