import React, { Component } from 'react';
import { Query } from 'src/drivers';
import categoryListQuery from '../../queries/getCategoryList.graphql';

class Test extends Component {


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
