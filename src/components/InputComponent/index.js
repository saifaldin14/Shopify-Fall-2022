import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./styles";

const InputComponent = (props) => {
  const classes = useStyles();

  /**
   * Function to call the function that will dispatch
   * the action to fetch data between the startDate and endDate
   */
  const handleUpdateData = () => {
    const data = {
      prompt: "Write a poem about a dog wearing skis",
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    props.onPostGPTData(data);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom component="div">
        Fun With AI
      </Typography>
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        minRows={4}
        defaultValue="Default Value"
        variant="filled"
      />
      <Button variant="contained" onClick={handleUpdateData}>
        Submit
      </Button>
    </div>
  );
};

export default InputComponent;
