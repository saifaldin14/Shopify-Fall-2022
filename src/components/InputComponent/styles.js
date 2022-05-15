import { makeStyles } from "@material-ui/core/styles";

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
}));
