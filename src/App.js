import "./App.css";
import { postGPTAction, postGPTPromptAction } from "./actions/postGPTData";
import { connect } from "react-redux";
import InputComponent from "./components/InputComponent";
import ResponseComponent from "./components/ResponseComponent";
import Lottie from "react-lottie";
import { default as animationData } from "./assets/lotties/loading.json";

const App = (props) => {
  /**
   * Function to call the prop that will dispatch an action to fetch data from the API
   * to retrieve responses using the passed data object and engine
   * @param {object} data
   * @param {string} engine
   */
  const onPostGPTData = (data, engine) => {
    props.postGPTData(data, engine);
  };

  /**
   * Function to store the value of the prompt from the input component
   * so that it can be used in the response component
   * @param {string} prompt
   */
  const onPostGPTPrompt = (prompt) => {
    props.postGPTPrompt(prompt);
  };

  //The default configurations for the loading animation
  //Loop until props.isLoading is false
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <h1>Robo Talk!</h1>
      {!props.isLoading ? (
        <>
          <InputComponent
            onPostGPTData={onPostGPTData}
            onPostGPTPrompt={onPostGPTPrompt}
          />
          <ResponseComponent
            gptData={props.gptData.data}
            prompt={props.prompt}
          />
        </>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  const gptData = state.postGPTData;
  const prompt = state.postGPTData.prompt;
  const isLoading = state.postGPTData.isLoading;

  // console.log(JSON.stringify(gptData));
  return {
    gptData,
    prompt,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postGPTData: (data, engine) => dispatch(postGPTAction(data, engine)),
    postGPTPrompt: (prompt) => dispatch(postGPTPromptAction(prompt)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
