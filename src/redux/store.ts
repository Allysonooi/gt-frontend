import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import submission from './reducer';

const middleware = [thunk];
const rootReducer = combineReducers({
  submission,
});

const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
