import React from 'react';
import Classify from 'src/classify'
import defaultClasses from './appbarfooter.css'

const AppBarFooter = (props) => {
  const handleToggleMenu = () => {
    !props.drawer ? props.ToggleNav("nav") : props.ToggleNav(null)

  }
  const   {classes,drawer} = props;
  const isActive = !drawer ?  classes.hamburger : classes.close;
  return ( <aside className={classes.root}>
    <label
      className={isActive}
      onClick={handleToggleMenu}
      >
      <span ></span>
      <span ></span>
      <span ></span>
    </label>
  </aside>)
}


export default Classify(defaultClasses)(AppBarFooter)
