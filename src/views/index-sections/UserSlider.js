import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "100+",
  },
  {
    value: 20,
    label: "1000+",
  },
  {
    value: 40,
    label: "10k+",
  },
  {
    value: 70,
    label: "100k+",
  },
  {
    value: 100,
    label: "1M+",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography> */}
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        marks={marks}
        valueLabelDisplay="off"
      />
    </div>
  );
}
