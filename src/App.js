import "./App.css";
import { postGPTAction } from "./actions/postGPTData";
import { connect } from "react-redux";
import FeedComponent from "./components/FeedComponent";
import DatePickerComponent from "./components/DatePickerComponent";
import Lottie from "react-lottie";
import { default as animationData } from "./assets/lotties/loading.json";

const App = (props) => {
  /**
   * Function to call the prop that will dispatch an action to fetch data from the API
   * to retrieve data between startDate and endDate
   * @param {object} data
   */
  const onPostGPTData = (data) => {
    props.postGPTData(data);
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
      <h1>Space-tagram!</h1>
      {!props.isLoading ? (
        <>
          <DatePickerComponent onGetNasaData={onGetNasaData} />
          <FeedComponent nasaData={props.nasaData.data} />
        </>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  const gptData = state.postGPTData;
  const isLoading = state.postGPTData.isLoading;

  return {
    gptData,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postGPTData: (data) => dispatch(postGPTAction(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
