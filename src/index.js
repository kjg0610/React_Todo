import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers } from "redux";
import { Provider } from 'react-redux';
import { todoReducer } from "./reducer";
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { logger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit'
const rootReducer = combineReducers({
    todo : todoReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    //yield all();
}

const store = () => {
	const store = configureStore({
		reducer: rootReducer,
		devTools: true, 
		middleware: [sagaMiddleware, logger],
    }); 
    
	sagaMiddleware.run(rootSaga);
	return store;
};


ReactDOM.render(
    <Provider store={store()}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
