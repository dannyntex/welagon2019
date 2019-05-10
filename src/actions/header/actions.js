import { createActions } from 'redux-actions';

const prefix = 'HEADER';
const actionTypes = [
    'TOGGLE_SIDE_NAV'

];

export default createActions(...actionTypes, { prefix });
