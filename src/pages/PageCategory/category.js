import React, { useEffect} from 'react';
import { string, number, shape } from 'prop-types';
import { Query } from 'src/drivers';
import classify from 'src/classify';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import CategoryContent from './categoryContent';
import defaultClasses from './category.css';
import categoryQuery from 'src/queries/getCategory.graphql';

const Category = (props) => {
  const {
      id,
      classes,
      currentPage,
      pageSize,
      prevPageTotal,
      setCurrentPage,
      setPrevPageTotal,
      setItemsCategory,
      items
  } = props;

    // TODO: Should not be a default here, we just don't have
    // the wiring in place to map route info down the tree (yet)
    // static defaultProps = {
    //     id:9
    // };
    const pageControl = {
        currentPage: currentPage,
        setPage: setCurrentPage,
        updateTotalPages: setPrevPageTotal,
        totalPages: prevPageTotal
    };

     useEffect( () => {
    setCurrentPage(currentPage)
      return ()=> {
        setCurrentPage(2)
      }


    })
    // componentDidUpdate(prevProps) {
    //     // If the current page has changed, scroll back up to the top.
    //     if (this.props.currentPage !== prevProps.currentPage) {
    //         window.scrollTo(0, 0);
    //     }
    // }








        return (
            <Query
                query={categoryQuery}
                variables={{
                    id: Number(id),
                    onServer: false,
                    pageSize: Number(currentPage),
                    currentPage: 0
                }}
                fetchPolicy={'cache-and-network'}
            >
                {({ loading, error, data,fetchMore }) => {
                  if (error) return <div>Data Fetch {error}</div>;
                  if (loading) return loadingIndicator;
                  // console.log("data",data)
                  // const button = data.category.products.items.length !== data.category.product_count ?
                  //   <button onClick={() => pagination()}>pagination!</button> :
                  //     null
                  // const pagination = () => {
                  //   fetchMore({
                  //     variables:{
                  //       pageSize: Number(currentPage)
                  //     },
                  //     updateQuery: (prev,{fetchMoreResult})=>{
                  //       const prevItems = prev.category.products.items
                  //
                  //       if (!fetchMoreResult) return prevItems
                  //         console.log("fetchMoreResult",fetchMoreResult)
                  //         console.log("prev", prev)
                  //       const intex = Object.assign({}, prev.category.products, {
                  //      items: [...fetchMoreResult.category.products.items ]
                  //        })
                  //
                  //        console.log(intex)
                  //     return intex
                  //     }
                  //   })
                  //   setCurrentPage(currentPage + 2)
                  // }




                  // console.log("estado items",items)
                  //
                  //   // TODO: Retrieve the page total from GraphQL when ready
                  //   const pageCount =
                  //       data.category.products.total_count / pageSize;
                  //
                  //   const totalPages = Math.ceil(pageCount);
                  //   console.log(totalPages)
                  //   const totalWrapper = {
                  //       ...pageControl,
                  //       totalPages: totalPages
                  //   };
                  console.log(data)
                    return (
                      <div>
                        <CategoryContent
                            classes={classes}
                            // pageControl={totalWrapper}
                            data={data}

                        />

                    </div>
                    );
                }}
            </Query>
        );

}
Category.propTypes = {
    id: number,
    classes: shape({
        gallery: string,
        root: string,
        title: string
    }),
    currentPage: number,
    pageSize: number,
    prevPageTotal: number
};
export default classify(defaultClasses)(Category)
