import { combineReducers } from 'redux';

import app from './app';
import catalog from './catalog';
// import checkout from './checkout';
// import directory from './directory';
// import user from './user';
// import purchaseDetails from './purchaseDetails';
// import checkoutReceipt from './checkoutReceipt';
// import purchaseHistory from './purchaseHistory';

export default combineReducers({
    app,
    catalog,
    // checkout,
    // checkoutReceipt,
    // directory,
    // purchaseDetails,
    // purchaseHistory,
    // user
});
