import {createStore, applyMiddleware, compose} from "redux";
import state from "./state";
import thunk from "redux-thunk";
import reducers from './Redux/Reducers'

const composeEnhancers =
 typeof window === "object" &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
   : compose;
   
const enhancer = composeEnhancers(
 applyMiddleware(thunk)
);

const store = createStore(reducers,state,enhancer);
export default store;