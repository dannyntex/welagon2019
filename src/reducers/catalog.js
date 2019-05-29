import { handleActions } from 'redux-actions';

import actions from 'src/actions/catalog';

export const name = 'catalog';

export const initialState = {
  categories: null,
  rootCategoryId: null,
  currentPage: 1,
  pageSize: 2,
  prevPageTotal: null
};

const reducerMap = {

  [actions.setCurrentPage.receive]: (state, { payload, error }) => {
    if (error) {
      return state;
    }

    return {
      ...state,
      currentPage: payload
    };
  },
  [actions.setPrevPageTotal.receive]: (state, { payload, error }) => {
    if (error) {
      return state;
    }

    return {
      ...state,
      prevPageTotal: payload
    };
  }
};

export default handleActions(reducerMap, initialState);

// /* helpers */
// function* extractChildCategories(category) {
//   const { children } = category;
//
//   for (const child of children) {
//     yield* extractChildCategories(child);
//   }
//
//   category.children = children.map(({ id }) => id);
//   console.log(category)
//   yield category;
// }
//
//
// function getNormalizedCategories(rootCategory) {
//
//   const map = {};
//
//   for (const category of extractChildCategories(rootCategory)) {
//
//     map[category.id] = category;
//   }
//   console.log(map)
//   return map;
// }
