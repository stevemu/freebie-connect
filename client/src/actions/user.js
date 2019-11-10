import {UPDATE_USER} from './action_types';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}