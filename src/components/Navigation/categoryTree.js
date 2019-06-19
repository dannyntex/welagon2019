import React from 'react';
import {
  func,
  shape,
  string,
  object,
  bool
} from 'prop-types';

import { Link ,resourceUrl} from 'src/drivers';
import classify from 'src/classify';
import defaultClasses from './categoryTree.css';

const Tree = (props) => {
  const urlSuffix = '.html';
  const {data, fetch, drawer, toggleDrawer,classes} = props
  const children = data.category.children.sort((a, b) => {
    if (a.position > b.position) return 1;
    else if (a.position == b.position && a.id > b.id)
    return 1;
    else return -1;
  });
  const handleToggleMenu = () => {
    !drawer ? toggleDrawer(true) : toggleDrawer(false)
  }
  const leaves = children.map(node => {
    if (node.include_in_menu === 0 || node.level === 1 ) {
      for (const nod in node){
        if(node.id === node[nod] && node.level === 1 ){
          return fetch(node.id)
        }
        return null;
      }
    }
    const { children_count } = node;
    const isLeaf = children_count == 0;

    if(isLeaf){
      return (
        <li className={classes.branch}
          key={node.id}
          onClick={handleToggleMenu}>

          <Link to={`/${node.url_path}${urlSuffix}`}>
            {node.name}
          </Link>
        </li>
      )
    }

    return  (
      <li className={classes.branch}
        key={node.id}
        onClick={()=>fetch(node.id)}>
        <em>
          {node.name}
        </em>
      </li>
    );
  })
  return (
    <ul className={classes.root}>
      {leaves}
    </ul>

  )
}

Tree.propTypes = {
  classes: shape({
    root: string,
    branch:string,
  }),
  data:object.isRequired,
  drawer:bool,
  toggleDrawer:func.isRequired,
  fetch:func.isRequired,
}

export default classify(defaultClasses)(Tree);
