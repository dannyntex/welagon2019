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


export default createActions(actionMap,{ prefix });
