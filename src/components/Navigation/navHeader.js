import React, { Component, Fragment } from 'react';
import { func, shape, string } from 'prop-types';

import classify from 'src/classify';
import Icon from 'src/components/Icon';
import ArrowLeftIcon from 'react-feather/dist/icons/arrow-left';
import CloseIcon from 'react-feather/dist/icons/x';
// import Trigger from 'src/components/Trigger';
import defaultClasses from './navHeader.css';

class NavHeader extends Component {
    // static propTypes = {
    //     classes: shape({
    //         title: string
    //     }),
    //     onBack: func.isRequired,
    //     onClose: func.isRequired
    // };
    handleActionsCat = (listCat,fetch) => {
      fetch(listCat[0],true)
   }
    render() {
        const { classes, listPrevCat,title ,fetch} = this.props;


        listPrevCat.sort((a, b)=>( a - b))
        const lastIdCat = listPrevCat.reverse();

        return (
            <Fragment>
                <button
                  onClick={()=> this.handleActionsCat(lastIdCat,fetch)}
                  >
                  <Icon src={ArrowLeftIcon} />
                </button>
                <h2
                  key="title"
                  className={classes.title}
                  >
                    <span>{title}</span>
                </h2>
            </Fragment>
        );
    }
}

export default classify(defaultClasses)(NavHeader);
