import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import CardComponent from "../CardComponent";
import { useStyles } from "./styles";

const ResponseComponent = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({ choices: [{ text: "" }] });
  const [cardData, setCardData] = useState(() => {
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
    if (
      props.gptData !== undefined &&
      props.gptData !== null &&
      !Array.isArray(props.gptData)
    ) {
      setData(props.gptData);
    }
  }, [props.gptData]);

  useEffect(() => {
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

  const save = () => {
    console.log("Saved: " + JSON.stringify(cardData));
    localStorage.setItem("vals", JSON.stringify(cardData));
  };

  return (
    <div className={classes.container}>
      {
        cardData === null || cardData.length === 0
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
            })
        // <CardComponent prompt={props.prompt} response={data.choices[0].text} />
      }
      <Button variant="contained" onClick={save}>
        Save
      </Button>
    </div>
  );
};

export default ResponseComponent;
