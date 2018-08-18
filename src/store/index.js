import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import Reducers from '../reducers'


// Logger with default options


/*
	Redux store initialised
*/

// const logoutMiddleware = store => next => action => {
// 	const object = JSON.parse(localStorage.getItem("accessToken"))
// 	let dateString,now;
// 	if(object) {
// 		dateString = object.timestamp
// 		now = new Date().getTime();
// 		if(!compareTime(dateString, now, 86400000)) {
// 			next({type: 'LOGOUT'})
// 			localStorage.clear()
// 		}
// 	}
// 	next(action)
// };

// // Applying middleware
// let middlewares = [thunk, logoutMiddleware]

// if (process.env.NODE_ENV !== 'production') {
// 	middlewares = [ ...middlewares, logger]
//   }

//Connecting middleware with store
const store = createStore(Reducers);

export default store;
