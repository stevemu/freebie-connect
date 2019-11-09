import {UPDATE_TOKEN} from '../actions/action_types';
let initialState = null;

function auth(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TOKEN: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default auth;