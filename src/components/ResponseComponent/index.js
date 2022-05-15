import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import { useStyles } from "./styles";

const FeedComponent = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({ choices: [{ text: "" }] });
  const [cardData, setCardData] = useState([]);

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
    </div>
  );
};

export default FeedComponent;
