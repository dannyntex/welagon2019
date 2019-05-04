import actions from './actions';

export const toggleSideNav = name => async dispatch =>{
  console.log(name)
  return dispatch(actions.toggleSideNav(name));
}
