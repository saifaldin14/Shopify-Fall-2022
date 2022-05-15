import { configureStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../reducers/index";
// import rootSaga from "../sagas/index";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  rootReducer
  // applyMiddleware(thunk, sagaMiddleware, logger)
);

// sagaMiddleware.run(rootSaga);

export default store;
