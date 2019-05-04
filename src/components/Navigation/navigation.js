import React,{Component} from 'react';


import Classify from 'src/classify'
import defaultClasses from './navigation.css'


class Navigation extends Component {
  render(){
  const {classes} = this.props;
    return (
      <div  className={classes.sidenav}>
        <a className="closebtn" >&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}
export default Classify(defaultClasses)(Navigation);
