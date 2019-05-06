import actions from './actions';

export const toggleSideNav = name => async dispatch =>{
  return dispatch(actions.toggleSideNav(name));
}
