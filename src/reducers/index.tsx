import { combineReducers } from 'redux';
import { allProjects } from './dataReducer';
export const reducers = combineReducers({
   data: allProjects,
});
