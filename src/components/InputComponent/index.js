import React, { useState, useEffect } from "react";
import {
  Button,
  InputLabel,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./styles";

const InputComponent = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [engine, setEngine] = useState("text-curie-001");

  /**
   * Function to call the function that will dispatch
   * the action to fetch data between the startDate and endDate
   */
  const handleUpdateData = () => {
    const data = {
      prompt: text,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    props.onPostGPTData(data, engine);
    props.onPostGPTPrompt(text);
  };

  const handleEngineChange = (event) => {
    setEngine(event.target.value);
  };

  return (
    <div className={classes.root}>
      <TextField
        id="filled-multiline-static"
        multiline
        minRows={15}
        placeholder="Enter a prompt..."
        variant="filled"
        className={classes.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className={classes.buttonContainer}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Engine</InputLabel>
          <Select value={engine} label="Engine" onChange={handleEngineChange}>
            <MenuItem value="text-curie-001">Curie</MenuItem>
            <MenuItem value={"text-davinci-002"}>Davinci</MenuItem>
            <MenuItem value={"text-babbage-001"}>Babbage</MenuItem>
            <MenuItem value={"text-ada-001"}>Ada</MenuItem>
          </Select>
          <FormHelperText>Select your GPT engine form here</FormHelperText>
        </FormControl>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleUpdateData}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default InputComponent;
