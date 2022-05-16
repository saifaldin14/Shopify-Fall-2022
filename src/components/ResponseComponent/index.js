import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import CardComponent from "../CardComponent";
import { useStyles } from "./styles";

const ResponseComponent = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({ choices: [{ text: "" }] });
  const [cardData, setCardData] = useState(() => {
    // Check to see if there are values in local storage
    // If there are then initialize cardData with it otherwise
    // leave it as an empty array
    if (
      localStorage.getItem("vals") !== undefined &&
      localStorage.getItem("vals") !== null
    ) {
      return JSON.parse(localStorage.getItem("vals"));
    } else {
      return [];
    }
  });

  useEffect(() => {
    // Save new data every time the gptData state is updated
    if (
      props.gptData !== undefined &&
      props.gptData !== null &&
      !Array.isArray(props.gptData) // With no responses or invalid responses gptData is an empty array
    ) {
      setData(props.gptData);
    }
  }, [props.gptData]);

  useEffect(() => {
    // Update cardData with the new data whenever data is updated
    if (
      props.gptData !== undefined &&
      props.gptData !== null &&
      !Array.isArray(props.gptData)
    ) {
      setCardData((cardData) => [
        ...cardData,
        {
          prompt: props.prompt,
          response: data.choices[0].text,
        },
      ]);
    }
  }, [data]);

  /**
   * Function to save the prompts and responses to local storage
   */
  const save = () => {
    localStorage.setItem("vals", JSON.stringify(cardData));
  };

  return (
    <div className={classes.container}>
      {cardData === null || cardData.length === 0
        ? console.log("Please wait")
        : cardData.map((gptObject, i) => {
            return (
              <CardComponent
                key={i}
                id={i}
                prompt={gptObject.prompt}
                response={gptObject.response}
              />
            );
          })}
      <div className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained" onClick={save}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ResponseComponent;
