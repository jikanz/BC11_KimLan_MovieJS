import React from "react";
import { makeStyles } from "@material-ui/core";
const bgAuth = "/img/login.jpg";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${bgAuth})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bgBlueColor: {
    backgroundImage:
      "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
    width: 450,
    height: "fit-content",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
    borderRadius: 6,
    position: "relative",
    zIndex: 1000,
    color: "white",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(50%,-50%)",
    border: "2px solid white",
    [theme.breakpoints.down("sm")]: {
      border: "none",
      top: 19,
      right: 24,
    },
    "&:focus": {
      outline: "none",
    },
    "&:hover": { opacity: 0.7 },
    transition: "all .2s",
  },
}));
export default function AuthLayout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <div className={classes.bgBlueColor}>{children}</div>
    </div>
  );
}
