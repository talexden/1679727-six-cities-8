import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {ThunkAppDispatch} from './types/action-type';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
