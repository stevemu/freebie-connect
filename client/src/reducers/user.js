import {UPDATE_USER} from '../actions/action_types';
let initialState = null;

function user(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default user;