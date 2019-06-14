import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'src/drivers';

import classify from 'src/classify';
import defaultClasses from './header.css';
import logo from './logo.png';

class Header extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      top:PropTypes.string,
      logo:PropTypes.string,
      size:PropTypes.string,
    })
  };

  static defaultProps = {
    size : 120
  }


  render(){
    const { classes} = this.props;
    return (
      <header className={classes.top}>
        <Link to='/'   className={classes.logo}>
        <img
          
          src={logo}
          width={this.props.size}
          alt="welagon"
          />
      </Link>
      </header>
    )
  }
}
export default classify(defaultClasses)(Header);
