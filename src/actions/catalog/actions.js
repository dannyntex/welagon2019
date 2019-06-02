import { createActions } from 'redux-actions';

const prefix = 'CATALOG';

const actionMap = {
    GET_ALL_CATEGORIES: {
        REQUEST: null,
        RECEIVE: null
    },
    SET_CURRENT_PAGE: {
        REQUEST: null,
        RECEIVE: null
    },
    SET_PREV_PAGE_TOTAL: {
        REQUEST: null,
        RECEIVE: null
    },
    SET_PREV_CATEGORY:{
      ADD: null,
      REMOVE: null

    },
    SET_TITLE_CATEGORY:{
      MODIFY: null

    }
};
// const actionTypes = [
//     'SET_PREV_CATEGORY',
//     'SET_TITLE_CATEGORY',
//   ]

export default createActions(actionMap,{ prefix });
