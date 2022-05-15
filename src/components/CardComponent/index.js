import React from "react";
import { Card, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const CardComponent = ({ id, prompt, response }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography variant="body2" color="textSecondary" component="p">
        {`Prompt: ${prompt}`}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {`Response: ${response}`}
      </Typography>
    </Card>
  );
};

export default CardComponent;
