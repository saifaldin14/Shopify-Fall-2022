import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "./styles";

const InputComponent = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");

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
    props.onPostGPTData(data);
    props.onPostGPTPrompt(text);
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
