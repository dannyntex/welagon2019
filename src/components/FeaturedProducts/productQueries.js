import React from 'react';
import {
  Link,
  resourceUrl,
  Query} from 'src/drivers';
import classify from 'src/classify'
import productDetailByCategoryLastUpdate from 'src/queries/getProductDetailByCategoryLastUpdate.graphql';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import defaultClasses from './productQueries.css';
import CarouselComponent from './carousel'
import noImage from 'src/shared/no-image.jpg'
const imagePatch =(image) => {

  if (image) {
    return resourceUrl(image, {
      type: 'image-product',
      width: 480
    });
  }
  return noImage
}
const ProductQueries = (props) => {
  const {classes} = props;
  const urlSuffix = '.html';
  return (
        <Query query={productDetailByCategoryLastUpdate} variables={{categoryId:"4",onServer:false}}>
          {({ data, loading, error  }) => {
            if (loading) return loadingIndicator;
            if (error) return <div>Data Fetch <pre>{error.message}</pre></div>;

                const nodes = data.products.items.map((item)=>{
                return (
                  <div key={item.id} className={classes.box}>
                    <Link to={`/${item.url_path}${urlSuffix}`}>
                      <p className={classes.price} >{item.price.regularPrice.amount.value}€</p>
                      <img className={classes.imagen} src={imagePatch(item.image.url)} alt="ordenadores"/>
                      <p className={classes.info} >{item.name}</p>
                    </Link>
                  </div>
                )
              }
            )
            return (
                <CarouselComponent nodes={nodes}/>
              )
            }
          }
        </Query>



  )
}

export default classify(defaultClasses)(ProductQueries)
