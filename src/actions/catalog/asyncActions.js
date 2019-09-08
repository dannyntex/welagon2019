import actions from './actions';



export const setPrevCategory = (payload,map) => async dispatch => {
    map === "add" ? (
      dispatch(actions.setPrevCategory.add(payload))
    ): (
      dispatch(actions.setPrevCategory.remove(payload))
    )

}


export const getTitleCategory = payload => async dispatch =>
    dispatch(actions.setTitleCategory.modify(payload));

// export const getAllCategories = () =>
//     async function thunk(dispatch) {
//         dispatch(actions.getAllCategories.request());
//
//         try {
//             // TODO: implement rest or graphql call for categories
//             // `/rest/V1/categories` requires auth for some reason
//             const { default: payload } = await import('./mockData');
//
//             dispatch(actions.getAllCategories.receive(payload));
//         } catch (error) {
//             dispatch(actions.getAllCategories.receive(error));
//         }
//     };

export const setCurrentPage = payload =>
    async function thunk(dispatch) {
        dispatch(actions.setCurrentPage.receive(payload));
    };

export const setPrevPageTotal = payload =>
    async function thunk(dispatch) {
        dispatch(actions.setPrevPageTotal.receive(payload));
    };
export const setItemsCategory = payload =>
  async function thunk(dispatch){
    dispatch(actions.setItemsCategory.addfirt(payload))
}
