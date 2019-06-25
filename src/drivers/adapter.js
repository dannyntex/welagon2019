import React, { Component } from 'react';
import { func, shape, string } from 'prop-types';
import { ApolloClient } from 'apollo-client';
import { persistCache } from 'apollo-cache-persist';

import { ApolloContext } from 'react-apollo/ApolloContext';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache,defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from '@magento/peregrine';

/**
 * The counterpart to "@magento/venia-drivers" is an adapter which provides
 * context objects to the driver dependencies. The default implementation in
 * 'src/drivers' uses components like 'react-apollo' and 'react-redux', which
 * have implicit external dependencies. This adapter provides all of them at
 * once.
 *
 * Consumers of Venia components can either implement a similar adapter and
 * wrap their Venia component trees with it, or they can override 'src/drivers'
 * so its components don't depend on context and IO.
 */

export default class Welagon extends Component {
    static propTypes = {
        apollo: shape({
            client: shape({
                query: func.isRequired
            }),
            link: shape({
                request: func.isRequired
            }),
            cache: shape({
                readQuery: func.isRequired
            })
        }),
        store: shape({
            dispatch: func.isRequired,
            getState: func.isRequired,
            subscribe: func.isRequired,
            replaceReducer: func.isRequired
        }).isRequired,
        apiBase: string.isRequired
    };

    //The link is used to get GraphQL results over a network using HTTP fetch
    static apolloLink(apiBase) {
        return createHttpLink({
            uri: apiBase
        });
    }
    static apolloCache() {
      const cache = new InMemoryCache({
          dataIdFromObject: (object) => {
            const identifier = object.identifier;
            switch (object.__typename) {
              case 'CmsBlock': return `CmsBlock:${identifier}`;
              default: return defaultDataIdFromObject(object);
            }
          },
          // cacheRedirects: {
          //   Query: {
          //  category: (_, { id },{getCacheKey}) => {
          //    console.log(id)
          //    console.log(getCacheKey({ __typename: 'CategoryTree', id }))
          //    return getCacheKey({ __typename: 'CategoryTree', id })
          //  }
          //    ,
          // //     category: (_, {id}, { getCacheKey }) =>{
          // //       console.log(id)
          // //     return getCacheKey({ __typename: 'CategoryTree', id: id })
          // //     }
          // //
          //   },
          // },
        });
      //configurar persistCache para que este la cache almacenado por defecto.
      persistCache({
        cache,
        storage: window.localStorage
      });

      return cache;
    }
    static apolloClient({ apiBase }) {
        return new ApolloClient({
            cache:  Welagon.apolloCache(),
            link:  Welagon.apolloLink(apiBase),

        });
    }

    constructor(props) {
        super(props);
        const apollo = this.props.apollo || {};
        this.apolloClient =
            apollo.client || Welagon.apolloClient(this.props);
    }
    render() {
        const { children, store, apiBase } = this.props;
        return (
          <ApolloContext.Provider value={this.apolloClient}>
            <ApolloProvider client={this.apolloClient}>
                <ReduxProvider store={store}>
                    <Router apiBase={apiBase}>{children}</Router>
                </ReduxProvider>
            </ApolloProvider>
          </ApolloContext.Provider>
        );
    }
}
