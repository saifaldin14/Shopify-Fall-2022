import { put } from "@redux-saga/core/effects";

import { postGPTAction } from "../actions/postGPTData";

const data = {
  prompt: "Write a poem about a dog wearing skis",
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
};

//Automatically call the API when the website loads
function* postGPTDataSaga() {
  yield put(postGPTAction(data));
}

export default postGPTDataSaga;
