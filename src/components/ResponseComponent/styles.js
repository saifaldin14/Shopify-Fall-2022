import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: "2rem",
  },
}));
