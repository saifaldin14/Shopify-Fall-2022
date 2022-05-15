import { makeStyles } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "50%",
    marginBottom: "2rem",
  },
  buttonContainer: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  like: {
    color: red[500],
  },
  unlike: {
    color: grey[500],
  },
}));
