import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    flexGrow: 1,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 50,
    label: "50",
  },
  {
      value: 100,
      label: "100+"
  }
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography> */}
      <Slider
        defaultValue={10}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={5}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}