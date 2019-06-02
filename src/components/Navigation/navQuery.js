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
                !isBack ?  props.addPrevCategory(prev.category.id,"add") : props.addPrevCategory();
                if (!fetchMoreResult) return prev;
                props.getTitleCategory(fetchMoreResult.category.name);
                return fetchMoreResult;
              }
            })
          }
          const {
            drawer,
            toggleDrawer,
            addPrevCategory,
            getTitleCategory,
            prevCategory,
            titleCategory
          } = props;

          return (
            <Fragment>
              <div>
                <NavHeader
                  title={titleCategory}
                  listPrevCat={prevCategory}
                  addPrevCategory={addPrevCategory}
                  fetch={fetch}
                  />
              </div>
              <ul >
                <CategoryTree
                  getTitleCategory={getTitleCategory}
                  addPrevCategory={addPrevCategory}
                  toggleDrawer={toggleDrawer}
                  drawer={drawer}
                  data={data}
                  fetch={fetch}
                  />
              </ul>
            </Fragment>
          )
        }
      }
    </Query>
  )
}
export default NavQuery
