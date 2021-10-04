import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// CSS-in-JS
const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  label: {
    fontWeight: "bold",
  },
});

const MyButton = styled(Button)((props) => ({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: props.isActive ? 100 : 200,
  padding: "0 30px",
}));

export default function Footer() {
  const classes = useStyle();
  const isActive = true;
  return (
    <div>
      <h1>Footer</h1>
      <Button
        className="abc"
        classes={{
          root: classes.root,
          label: classes.label,
        }}
      >
        Submit
      </Button>

      <MyButton isActive={false}>My Button</MyButton>

      <Button className={isActive ? "active" : "unactive"}>Demo</Button>
    </div>
  );
}
