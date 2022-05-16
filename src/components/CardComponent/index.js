import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "./styles";

const CardComponent = ({ id, prompt, response }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Prompt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{prompt}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Response</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{response}</Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default CardComponent;
