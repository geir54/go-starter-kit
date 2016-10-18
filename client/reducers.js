import { combineReducers } from 'redux';
import { SET_CONFIG } from './actions';

import todos from './components/todo/reducers/todos'
import visibilityFilter from './components/todo/reducers/visibilityFilter'

function config(state = {}, action) {
  switch (action.type) {
    case SET_CONFIG:
      return action.config;
    default:
      return state;
  }
}

export default combineReducers({
  config,
  todos,
  visibilityFilter
});
