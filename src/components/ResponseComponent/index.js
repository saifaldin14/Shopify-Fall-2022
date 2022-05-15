import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import { useStyles } from "./styles";

const FeedComponent = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({ choices: [{ text: "" }] });

  useEffect(() => {
    console.log("Not yet stored: " + JSON.stringify(props.gptData));
    if (
      props.gptData !== undefined &&
      props.gptData !== null &&
      !Array.isArray(props.gptData)
    ) {
      setData(props.gptData);
    }
  }, [props.gptData]);

  console.log("My data: " + JSON.stringify(data));

  return (
    <div className={classes.container}>
      {data === null || data === undefined ? (
        console.log("Please wait")
      ) : (
        // : data.data.map((gptObject, i) => {
        //     return (
        //       <CardComponent
        //         key={i}
        //         id={i}
        //         title={nasaObject.title}
        //         date={nasaObject.date}
        //         description={nasaObject.explanation}
        //         imageUrl={nasaObject.url}
        //       />
        //     );
        //   })
        <CardComponent prompt={props.prompt} response={data.choices[0].text} />
      )}
    </div>
  );
};

export default FeedComponent;
