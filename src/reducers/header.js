import { handleActions } from 'redux-actions';

import actions from 'src/actions/header';

export const name = 'header';
const initialState = {
    drawer: null,
  }
  const reducerMap = {
      [actions.toggleSideNav]: (state, { payload }) => {
        console.log(payload);
          return {
              ...state,
              drawer: payload,
              //overlay: !!payload
          };
      },
    }
export default handleActions(reducerMap, initialState);
