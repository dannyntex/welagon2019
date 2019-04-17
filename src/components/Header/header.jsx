import React, { Component} from 'react';
import PropTypes from 'prop-types'

import classify from 'src/classify';
import classes from './header.css';

class Header extends Component {
  static propTypes ={
    root:PropTypes.string
  }
  render(){
    //const { classes } = this.props;
    return (
      <div className={classes.root}>
        "header"
      </div>
    )
  }
}
export default Header;
