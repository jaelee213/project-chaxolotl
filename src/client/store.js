/**
* ************************************
*
* @module  store.js
* @author
* @date
* @description Redux 'single source of truth'
*
* ************************************
*/

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducers from './reducers/index';

const store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

export default store;