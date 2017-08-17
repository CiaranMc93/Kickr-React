import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
//app has no curly brackets if is a default component
import App from './App';
import { getMatches } from './utilities/api';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import {Provider} from 'react-redux';

//reducer for query
//state = '' - state is set to '' as the initial state
const queryReducer = (state = '',action) => {
	//switch on the action
	switch(action.type){
		case 'SEARCH': 
			//return the new state with the changed query
			return action.payload.searchTerm;
		case 'MATCHES_FETCH': 
			//return the new state with the changed query
			return '';
		default:
			return state;
	}
}

//state = [] - state is set to [] as the initial state
const matchesReducer = (state = [],action) => {
	//switch on the action
	switch(action.type){
		case 'MATCHES_FETCH': 
			//return the new state with the changed matches object
			return action.payload.results;
		default:
			return state;
	}
}

const store = createStore(combineReducers({
	query: queryReducer,
	matches: matchesReducer,
}), applyMiddleware(Thunk,Logger))

export const searchAction = (query) => {

	return {
		type: 'SEARCH',
			payload: {
				searchTerm: query,
			}
	}
}

export const matchesFetchAction = (matches) => {
	return (dispatch) => {
		//dispatch {type: robots_fetch_pending}
		getMatches()
			.then((matches) => dispatch({
				type: 'MATCHES_FETCH',
				payload: {
					results: matches,
				}
		}))
	}
}


ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>, 
	  document.getElementById('root')
);
