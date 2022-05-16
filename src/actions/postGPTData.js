import gpt from "../lib/gpt";

//Types
export const GPT_POST_REQUEST = "GPT_POST_REQUEST";
export const GPT_POST_SUCCESS = "GPT_POST_SUCCESS";
export const GPT_POST_PROMPT_SUCCESS = "GPT_POST_PROMPT_SUCCESS";
export const GPT_POST_FAILURE = "GPT_POST_FAILURE";

//Actions
const postGPTRequest = () => {
  return { type: GPT_POST_REQUEST };
};

const postGPTSuccess = (data) => {
  return { type: GPT_POST_SUCCESS, payload: data };
};

const postGPTPromptSuccess = (prompt) => {
  return { type: GPT_POST_PROMPT_SUCCESS, payload: prompt };
};

const postGPTFailure = () => {
  return { type: GPT_POST_FAILURE };
};

export const postGPTAction = (data, engine) => (dispatch) => {
  //Dispatch the request action (isLoading will be true)
  dispatch(postGPTRequest());
  //Fetch the data
  gpt
    .getGPT(data, engine)
    .then((res) => {
      //Once the data is successfully retrieved execute the success action
      console.log("Success!!!!");
      dispatch(postGPTSuccess(res));
    })
    .catch((e) => {
      //Failure and execute failure action
      console.log(e);
      dispatch(postGPTFailure());
    });
  //In both success or failure isLoading will be false
};

export const postGPTPromptAction = (prompt) => (dispatch) => {
  dispatch(postGPTRequest());

  if (prompt !== "") dispatch(postGPTPromptSuccess(prompt));
  else dispatch(postGPTFailure());
};
