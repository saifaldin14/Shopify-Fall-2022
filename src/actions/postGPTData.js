import gpt from "../lib/gpt";

//Types
export const GPT_POST_REQUEST = "GPT_POST_REQUEST";
export const GPT_POST_SUCCESS = "GPT_POST_SUCCESS";
export const GPT_POST_FAILURE = "GPT_POST_FAILURE";

//Actions
const postGPTRequest = () => {
  return { type: GPT_POST_REQUEST };
};

const postGPTSuccess = (data) => {
  return { type: GPT_POST_SUCCESS, payload: data };
};

const postGPTFailure = () => {
  return { type: GPT_POST_FAILURE };
};

export const postGPTAction = () => (dispatch) => {
  //Dispatch the request action (isLoading will be true)
  dispatch(postGPTRequest());
  //Fetch the data
  gpt
    .getGPT()
    .then((res) => {
      //Once the data is successfully retrieved execute the success action
      dispatch(postGPTSuccess(res));
    })
    .catch((e) => {
      //Failure and execute failure action
      console.log(e);
      dispatch(postGPTFailure());
    });
  //In both success or failure isLoading will be false
};
