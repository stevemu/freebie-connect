import { combineReducers } from 'redux';
import authToken from './auth';
import user from './user';

const app = combineReducers({
  authToken,
  user
})

export default app