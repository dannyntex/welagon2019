import React from 'react';
import { Query,resourceUrl } from 'src/drivers';

import categoryListQuery from '../../queries/getCategoryList.graphql';
import classify from 'src/classify'
import defaultClasses from './cathomepage.css';
import noImage from 'src/shared/no-image.jpg'

const imagePatch =(image) => {
  if (image) {
    return resourceUrl(image, {
      type: 'image-category',
      width: 480
    });
  }
  return noImage
}
const CatHomepage = (props) => {
  const {rootId ,classes} = props;
  return (
    <Query query={categoryListQuery} variables={{id: rootId}}>
      {({ loading, error, data }) => {

        if (error) {
          return (
            <div className={classes.fetchError}>
              Data Fetch Error: <pre>{error.message}</pre>
          </div>
        );
      }
      if (loading) {
        return loadingIndicator;
      }

      if (data.category.children.length === 0) {
        return (
          <div >
            No child categories found.
          </div>
        );
      }
      const items = data.category.children.map((item,index)=> {
        if (item.include_in_menu === 1) {
          return (
            <div key={index} className={classes.container}>
              <a className={classes.imageBack} style={{backgroundImage: `url(${imagePatch(item.image)})`}}>{item.name}</a>
            </div>
          )
        }
      })
      return (
        <section>
          {items}
        </section>
      )
    }}
  </Query>
)
}

export default classify(defaultClasses)(CatHomepage);
