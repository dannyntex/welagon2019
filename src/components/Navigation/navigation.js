import React from 'react';
import NavQuery from './navQuery'
import {
  shape,
  string ,
  bool,
  func,
  array,
} from 'prop-types';

import Classify from 'src/classify'
import defaultClasses from './navigation.css'



const Navigation = (props) => {
  const rootId = 9;
  const {
      classes,
      drawer,
      toggleDrawer,
      setPrevCategory,
      getTitleCategory,
      prevCategory,
      titleCategory
    } = props

    const isOpenNav = drawer ? classes.openSideNav : classes.sideNav;
    return (
      <aside  className={isOpenNav}>
        <NavQuery
          titleCategory={titleCategory}
          prevCategory={prevCategory}
          getTitleCategory={getTitleCategory}
          setPrevCategory={setPrevCategory}
          toggleDrawer={toggleDrawer}
          drawer={drawer}
          rootId={rootId}
          />
      </aside>
    )

}
Navigation.propTypes = {
  classes: shape({
    openSideNav: string,
    sideNav:string,
  }),
  drawer:bool,
  getTitleCategory:func.isRequired,
  setPrevCategory:func.isRequired,
  toggleDrawer:func.isRequired,
  titleCategory:string,
  prevCategory:array
}
export default Classify(defaultClasses)(Navigation);
