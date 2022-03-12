import { createStore, compose } from "redux";
import reducers from "../reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,{}, composeEnhancer);

export default store;