import { handleActions } from 'redux-actions';

import actions from 'src/actions/catalog';

export const name = 'catalog';

export const initialState = {
  categories: null,
  rootCategoryId: null,
  currentPage: 4,
  pageSize:2,
  prevPageTotal: null,
  prevCategory: [],
  titleCategory:"Menú Principal",
  rootId:9,
  items:[]
};

const reducerMap = {
  [actions.setPrevCategory.add] : (state, { payload, error }) => {
    if (error) {
      return state;
    }
    return {
      ...state,
      prevCategory: [...state.prevCategory,payload]
    };
  },
  [actions.setPrevCategory.remove] : (state, { payload, error }) => {
    if (error) {
      return state;
    }
    return {
      ...state,
      prevCategory: [...state.prevCategory.slice(1,state.prevCategory.length),...state.prevCategory.slice(state.prevCategory.length,1)]
    };
  },
  [actions.setTitleCategory.modify] : (state, { payload, error }) => {
    if (error) {
      return state;
    }
    return {
      ...state,
      titleCategory: payload
    };
  },
  [actions.setCurrentPage.receive]: (state, { payload, error }) => {
    if (error) {
      return state;
    }
    return {
      ...state,
      currentPage: payload
    }

  },
  [actions.setPrevPageTotal.receive]: (state, { payload, error }) => {
    if (error) {
      return state;
    }

    return {
      ...state,
      prevPageTotal: payload
    };
  },
  [actions.setItemsCategory.addfirt]: (initialState, {payload, error}) =>{
    if(error ) {
      return initialState;
    }
      console.log("payload",payload)
      return {
        ...initialState
        // items: initialState.items.concat(payload)
      }
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
