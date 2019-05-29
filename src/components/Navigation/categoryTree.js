import React, { Component, Fragment } from 'react';
import { func, number, objectOf, shape, string } from 'prop-types';

import { Query, Link} from 'src/drivers';
import classify from 'src/classify';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import Branch from './categoryBranch';
import Leaf from './categoryLeaf';

import defaultClasses from './categoryTree.css';
import navigationMenu from '../../queries/getNavigationMenu.graphql';

const Tree = (props) => {
  const urlSuffix = '.html';
  return (
    <Query query={navigationMenu} variables={{ id: 9}}>

      {({ data, loading, error ,fetchMore }) => {

        if (loading) return loadingIndicator;
        if (error) return <div>Data Fetch Error</div>;
          function fetch(id) {
            fetchMore({
              variables:{
                id:  id
              },
              updateQuery:(prev,{fetchMoreResult,})=>{

                if (!fetchMoreResult) return prev;
                return fetchMoreResult
              }
            })
          }

          const children = data.category.children.sort((a, b) => {
            if (a.position > b.position) return 1;
            else if (a.position == b.position && a.id > b.id)
            return 1;
            else return -1;
          });
          const {drawer, toggleDrawer}= props;

          const handleToggleMenu = () => { !drawer ? toggleDrawer(true) : toggleDrawer(false)}
          const leaves = children.map(node => {
            if (node.include_in_menu === 0 || node.level === 1 ) {
              for (const nod in node){
                if(node.id === node[nod] && node.level === 1 ){
                  return fetch(node.id)
                }
                return null;
              }
            }
            const { children_count } = node;

            const isLeaf = children_count == 0;
            if(isLeaf){
              return (
                <li
                key={node.id}
                onClick={handleToggleMenu}>
                  <Link to={`/${node.url_path}${urlSuffix}`}>
                    {node.name}
                  </Link>
                </li>
              )
            }

            return   (
              <li
                key={node.id}
                onClick={()=>fetch(node.id)}>
                {node.name}</li>
            );
          })
          return (
            <Fragment>
              {leaves}
            </Fragment>
          )
        }
      }
    </Query>
  )
}


export default classify(defaultClasses)(Tree);
