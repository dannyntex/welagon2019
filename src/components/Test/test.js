import React, { Component } from 'react';
import { Query } from 'src/drivers';
import categoryListQuery from '../../queries/getCategoryList.graphql';

class Test extends Component {
  get imagePath() {

      const { image, productImagePreview } = this.props.item;
      const previewProduct = productImagePreview.items[0];
      if (image) {
          return resourceUrl(image, {
              type: 'image-category',
              width: previewImageSize
          });
      } else if (previewProduct) {
          return resourceUrl(previewProduct.small_image, {
              type: 'image-product',
              width: previewImageSize
          });
      } else {
          return null;
      }
  }

  render(){
      //     const { imagePath, props } = this;
      // // const imageUrl = this.imagePath ? `url(${this.imagePath})` : 'none';
      // //   console.log(imageUrl)
      // const imagePreview = imagePath ? (
      //     <img  src={imagePath} alt={item.name} />
      // ) : null;
    const id = 9;
    return(

      <Query query={categoryListQuery} variables={{id}}>
        {({ loading, error, data }) => {
          if (error) {
            return (
              <div >
                Data Fetch Error: <pre>{error.message}</pre>
            </div>
          );
        }
        if (loading) {
          return "cargado";
        }
        return (
          data.category.children.map(item => {


          return item.name
          })
        )

    }  }
  </Query>

)
}
}
export default Test
