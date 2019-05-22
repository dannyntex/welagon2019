import React from 'react';
import { storiesOf } from '@storybook/react';

import Navigation from '../navigation';
import defaultClasses from '../navigation.css';
import 'src/index.css';
import { Adapter } from 'src/drivers';
import store from 'src/store';
import RenderPageBySize from 'src/components/RenderPageBySize'

const stories = storiesOf('Navigation', module);
const apiBase = new URL('/graphql', location.origin).toString();
function MockPage({ children }) {
    const styles = {
        container: {
            margin: '0 auto',
            width: 375,
            height: '100%',
            border: '1px solid gray',
            position: 'relative'
        },

    };
    return (
        <div style={styles.container}>
            {children}
        </div>
    );
}

stories.add('NavMenu', () => (
    <Adapter
        apiBase={apiBase}
        apollo={{ link: Adapter.apolloLink(apiBase) }}
        store={store}
    >
      <RenderPageBySize>
    <MockPage>
        <Navigation classes={defaultClasses}
        />
    </MockPage>
          </RenderPageBySize>
    </Adapter>
));
