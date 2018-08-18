import { combineReducers } from 'redux'

/*
 * Root Reducer for combining all single reducers
 * Import all reducers here and associate it to the reducersObj with a particular key
 */

import AppState from '../containers/gridview/AppReducres';


const reducersObj = {
    AppState: AppState,
}

const reducers = combineReducers(reducersObj);

export default reducers;