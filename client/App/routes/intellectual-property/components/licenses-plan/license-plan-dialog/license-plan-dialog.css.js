import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dialog: {
    margin: "10px",
  },
  root: {
    display: "inline-flex",
    flexDirection: "row",
    minWidth: "96%",
    margin: "2%",
  },
  button: {
    margin: "10px",
    padding: "10px",
    height: "fit-content",
  },
  darkText: {
    color: theme.palette.text.primary,
  },
  bold: {
    fontWeight: "bold",
  },
}));
