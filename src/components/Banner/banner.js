import React from 'react';
import {
  Query,
  resourceUrl,
  Link,
  getPathName
} from 'src/drivers'

import getCmsBlocks from '../../queries/getCmsBlocks.graphql';
import { loadingIndicator } from 'src/components/LoadingIndicator';
import Classify from 'src/classify';
import defaultClasses from './Banner.css';

const Banner = (props) => {
    const {classes} = props;

    return (
      <Query
        query={getCmsBlocks}
        variables={{identifiers:'banner_homepage_movil'}}
        fetchPolicy="cache-and-network"
        >
        {({ data, loading, error ,client }) => {
          if (loading) return loadingIndicator;
          if (error) return <div>Data Fetch Error</div>;
            const {items} = data.cmsBlocks;
            if (!Array.isArray(items) || !items.length) {
              return <div>There are no blocks to display</div>;
              }
            const content = items[0].content;
            const src = content.match(/src=(".*?")/);
            const href = content.match(/href=(".*?")/)
            if(!src){
                return <div>There is no image</div>
              }
            const blockImg = src[1].match('((?:http|https)(?::\\/{2}[\\w]+)(?:[\\/|\\.]?)(?:[^\\s"]*))');
            const linkImg = href[1].match('((?:http|https)(?::\\/{2}[\\w]+)(?:[\\/|\\.]?)(?:[^\\s"]*))');
            const urlimg = resourceUrl(blockImg[1],{
              width:480
            });
            const urllink = getPathName(linkImg[1]);
            return (
              <section>
                <Link to={urllink}>
                  <img
                      src={urlimg}
                      className={classes.banner}
                    />
                </Link>

              </section>
            )
          }}
    </Query>
    )
  }

export default Classify(defaultClasses)(Banner);
