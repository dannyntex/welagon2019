import React,{Fragment} from 'react';
import NavHeader from './navHeader';
import { Query} from 'src/drivers';
import navigationMenu from '../../queries/getNavigationMenu.graphql';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import CategoryTree from './categoryTree';
const NavQuery = (props) => {
  return (
    <Query query={navigationMenu} variables={{ id: 9}}>

      {({ data, loading, error ,fetchMore }) => {

        if (loading) return loadingIndicator;
        if (error) return <div>Data Fetch Error</div>;
          function fetch(id,isBack = false) {

            fetchMore({
              variables:{
                id:  id
              },
              updateQuery:(prev,{fetchMoreResult})=>{
                !isBack ?  props.setPrevCategory(prev.category.id,"add") : props.setPrevCategory();
                if (!fetchMoreResult) return prev;
                props.getTitleCategory(fetchMoreResult.category.name);
                return fetchMoreResult;
              }
            })
          }
          const {
            drawer,
            toggleDrawer,
            setPrevCategory,
            getTitleCategory,
            prevCategory,
            titleCategory
          } = props;

          return (
            <Fragment>
                <NavHeader
                  title={titleCategory}
                  listPrevCat={prevCategory}
                  setPrevCategory={setPrevCategory}
                  fetch={fetch}
                  />
                  <CategoryTree
                  getTitleCategory={getTitleCategory}
                  setPrevCategory={setPrevCategory}
                  toggleDrawer={toggleDrawer}
                  drawer={drawer}
                  data={data}
                  fetch={fetch}
                  />
            </Fragment>
          )
        }
      }
    </Query>
  )
}
export default NavQuery
