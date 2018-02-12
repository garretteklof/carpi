import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import diemsReducer from '../reducers/diems';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			auth: authReducer,
			diems: diemsReducer,
			filters: filtersReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
};