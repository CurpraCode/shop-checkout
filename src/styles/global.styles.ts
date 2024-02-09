// PLUGINS IMPORTS //
import { theme } from "./theme.styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(() => {
  const largeWidth = `calc(600px + ${theme.spacing(2) * 2}px)`; // Ensure theme.spacing returns a string
  const largePadding = `${theme.spacing(3) * 2}px`; // Ensure theme.spacing returns a string

  return {
    root: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        width: largeWidth,
        marginLeft: "auto",
        marginRight: "auto",
      },
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: largePadding,
      },
    },
  };
});
