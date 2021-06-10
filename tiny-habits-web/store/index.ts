import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, Store } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';

const configureStore = (): Store => {
  const middlewares = [ReduxThunk];
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
