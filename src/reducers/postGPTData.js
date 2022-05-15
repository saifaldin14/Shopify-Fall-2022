import {
  GPT_POST_REQUEST,
  GPT_POST_SUCCESS,
  GPT_POST_PROMPT_SUCCESS,
  GPT_POST_FAILURE,
} from "../actions/postGPTData";

//Define the initial state
const INITIAL_STATE = {
  isLoading: false,
  data: [],
};

//Reducer to update the store
const postGPTData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GPT_POST_REQUEST:
      return { ...state, isLoading: true };
    case GPT_POST_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case GPT_POST_PROMPT_SUCCESS:
      return { ...state, prompt: action.payload, isLoading: false };
    case GPT_POST_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default postGPTData;
