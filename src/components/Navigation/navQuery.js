import React,{Fragment} from 'react';
import {
  func,
  string,
  array,
  bool
} from 'prop-types';
import { Query} from 'src/drivers';

import navigationMenu from '../../queries/getNavigationMenu.graphql';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import NavHeader from './navHeader';
import CategoryTree from './categoryTree';

const NavQuery = (props) => {
  const {
    drawer,
    toggleDrawer,
    setPrevCategory,
    prevCategory,
    titleCategory,
    getTitleCategory
  } = props;
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
                !isBack ?  setPrevCategory(prev.category.id,"add") : setPrevCategory();
                if (!fetchMoreResult) return prev;
                getTitleCategory(fetchMoreResult.category.name);
                return fetchMoreResult;
              }
            })
          }
          return (
            <Fragment>
              <NavHeader
                title={titleCategory}
                listPrevCat={prevCategory}
                setPrevCategory={setPrevCategory}
                fetch={fetch}
                />
              <CategoryTree
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

NavQuery.propTypes = {
  drawer:bool,
  toggleDrawer:func.isRequired,
  prevCategory:array.isRequired,
  titleCategory:string,
  setPrevCategory:func.isRequired,
  getTitleCategory:func.isRequired,
}

export default NavQuery
