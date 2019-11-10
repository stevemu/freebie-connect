import {UPDATE_TOKEN} from './action_types';

export function updateAuthToken(token) {
  return {
    type: UPDATE_TOKEN,
    payload: token
  }
}