import { combineReducers } from 'redux';
import { navigatorReducer } from '../navigator';

const reducer = combineReducers({
  navigator: navigatorReducer,
});

export { reducer };
