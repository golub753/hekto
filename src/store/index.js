import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { languageReducer } from "./languageReducer";
import { currencyReducer } from "./currencyReducer";

const rootReducers = combineReducers({
    language: languageReducer,
    currency: currencyReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));