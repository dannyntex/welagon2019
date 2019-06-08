import React, { Fragment } from 'react';
import { func, shape, string,array } from 'prop-types';

import classify from 'src/classify';
import Icon from 'src/components/Icon';
import ArrowLeftIcon from 'react-feather/dist/icons/arrow-left';


import defaultClasses from './navHeader.css';

const NavHeader = (props) => {
  const handleActionsCat = (listCat,fetch) => {
    fetch(listCat[0],true)
  }
  const { classes, listPrevCat,title ,fetch} = props;
  listPrevCat.sort((a, b)=>( a - b))
  const lastIdCat = listPrevCat.reverse();
  return (
    <Fragment>
      <div className={classes.root}>
        {listPrevCat[0] ? (
          <button
            onClick={()=> handleActionsCat(lastIdCat,fetch)}
            >
            <Icon src={ArrowLeftIcon} />
          </button>
        ): null}

        <h5
          key="title"
          className={classes.title}
          >
          <span>{title}</span>
        </h5>
      </div>
    </Fragment>
  );
}

NavHeader.propTypes = {
  classes: shape({
    title: string
  }),
  title:string,
  fetch:func.isRequired,
  listPrevCat:array
};

export default classify(defaultClasses)(NavHeader);
