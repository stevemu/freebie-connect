import { combineReducers } from 'redux';
import authToken from './auth';

const app = combineReducers({
  authToken
})

export default app