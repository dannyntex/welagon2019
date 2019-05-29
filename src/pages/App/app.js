import React, { Component, Fragment } from 'react';
import {
  array, bool, func, shape, string
} from 'prop-types';

import Main from '../Main';

import { Mask,OnlineIndicator }from 'src/components';


import errorRecord from 'src/util/createErrorRecord';
import ErrorNotifications from './errorNotifications';
import renderRoutes from './renderRoutes';


class App extends Component {
  static propTypes = {
    app: shape({
      drawer:bool,
      hasBeenOffline: bool,
      isOnline: bool,
      overlay: bool.isRequired
    }).isRequired,

    markErrorHandled: func.isRequired,
    unhandledErrors: array
  };

  static get initialState() {
    return {
      renderError: null
    };
  }
  /*eslint getter-return: "off"*/
  get errorFallback() {
    const { renderError } = this.state;
    if (renderError) {
      const errors = [
        errorRecord(renderError, window, this, renderError.stack)
      ];
      return (
        <Fragment>
          <ErrorNotifications
            errors={errors}
            onDismissError={this.recoverFromRenderError}
            />
        </Fragment>
      );
    }
  }

  get onlineIndicator() {
    const { app } = this.props;
    const { hasBeenOffline, isOnline } = app;

    // Only show online indicator when
    // online after being offline
    return hasBeenOffline ? <OnlineIndicator isOnline={isOnline} /> : null;
  }

  // Defining this static method turns this component into an ErrorBoundary,
  // which can re-render a fallback UI if any of its descendant components
  // throw an exception while rendering.
  // This is a common implementation: React uses the returned object to run
  // setState() on the component. <App /> then re-renders with a `renderError`
  // property in state, and the render() method below will render a fallback
  // UI describing the error if the `renderError` property is set.
  static getDerivedStateFromError(renderError) {
    return { renderError };
  }

  recoverFromRenderError = () => window.location.reload();

  state = App.initialState;

  render() {
    const { errorFallback } = this;
    if (errorFallback) {
      return errorFallback;
    }
    const {
      app,
      markErrorHandled,
      unhandledErrors
    } = this.props;
    const { onlineIndicator } = this;
    const { drawer, overlay } = app;
    const cartIsOpen = drawer === 'cart';

    return (
      <Fragment>
        <Main isMasked={overlay}>
            {onlineIndicator}
            {renderRoutes()}
        </Main>
        <Mask isActive={false} />
        <ErrorNotifications
          errors={unhandledErrors}
          onDismissError={markErrorHandled}
          />
      </Fragment>
    );
  }
}

export default App;
