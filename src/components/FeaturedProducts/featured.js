import React from 'react';

import ProductQueries from './productQueries'

import classify from 'src/classify'
import defaultClasses from './featured.css';


 const Featured = (props)=> {

    const {classes} = props;
    return(
      <div className={classes.container}>
        <section>
          <h4>Destacados</h4>
          <ProductQueries/>
        </section>
      </div>
    )
  }


export default classify(defaultClasses)(Featured);
