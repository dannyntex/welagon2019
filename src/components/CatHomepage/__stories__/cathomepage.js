import React from 'react';
import { storiesOf } from '@storybook/react';

import CatHomepage from '../CatHomepage';
import defaultClasses from '../cathomepage.css';
import 'src/index.css';
import { Adapter } from 'src/drivers';
import store from 'src/store';

const stories = storiesOf('CatHomepage', module);
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

stories.add('categorias', () => (
    <Adapter
        apiBase={apiBase}
        apollo={{ link: Adapter.apolloLink(apiBase) }}
        store={store}
    >
    <MockPage>
        <CatHomepage
            classes={defaultClasses}

        />
    </MockPage>
    </Adapter>
));
