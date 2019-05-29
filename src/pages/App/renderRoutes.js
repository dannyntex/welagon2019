import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Page } from '@magento/peregrine';
import ErrorView from 'src/components/ErrorView/index';



const renderRoutingError = props => <ErrorView {...props} />;

const renderRoutes = () => (
    <Switch>
        <Route render={() => <Page>{renderRoutingError}</Page>} />
    </Switch>
);

export default renderRoutes;
