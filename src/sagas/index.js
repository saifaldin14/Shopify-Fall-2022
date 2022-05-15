import { all } from "@redux-saga/core/effects";

import postGPTDataSaga from "./postGPTDataSaga";

function* rootSaga() {
  yield all([postGPTDataSaga()]);
}

export default rootSaga;
