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
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  button: {
    border: "none",
    margin: 20,
    width: 250,
    height: 65,
    borderRadius: 6,
    textTransform: "uppercase",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    cursor: "pointer",
    color: "#fff",
    backgroundSize: "200%",
    transition: "0.4s",
    "&:hover": {
      backgroundPosition: "right",
    },
    backgroundImage: "linear-gradient(45deg, #00ccff, #0066ff, #00A8FF)",
  },
}));
