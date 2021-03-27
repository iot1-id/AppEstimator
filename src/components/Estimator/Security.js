import React from 'react'
import {
  Button,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Security({ minHours, setMinHours, maxHours, SetMaxhours }) {
  const [isBase, setIsBase] = React.useState(true);
  const [isHigh, setIsHigh] = React.useState(true);
  const [isAdvance, setIsAdvance] = React.useState(true);
  return (
    <div className="center">
      <br />
      <hr className="style1" />
      <br />
      <h1 className="headings">Security required</h1>
      <br />
      <Col>
        <Button
          id="security1"
          className="btn1"
          onClick={() => {
            if (isBase) {
              setIsBase(false);
              setMinHours(minHours + 5);
              SetMaxhours(maxHours + 10);
            } else {
              setIsBase(true);
              setMinHours(minHours - 5);
              SetMaxhours(maxHours - 10);
            }
          }}
          disabled={!isHigh || !isAdvance}
        >
          <img
            alt="..."
            // className="rounded-circle img-raised"
            src={require("assets/img/base.png")}
          ></img>
        </Button>
        <UncontrolledTooltip delay={0} placement="bottom" target="security1">
          Lite Security
        </UncontrolledTooltip>
        <Button
          id="security2"
          className="btn1"
          onClick={() => {
            if (isHigh) {
              setIsHigh(false);
              setMinHours(minHours + 25);
              SetMaxhours(maxHours + 40);
            } else {
              setIsHigh(true);
              setMinHours(minHours - 25);
              SetMaxhours(maxHours - 40);
            }
          }}
          disabled={!isBase || !isAdvance}
        >
          <img
            alt="..."
            // className="rounded-circle img-raised"
            src={require("assets/img/high.png")}
          ></img>
        </Button>
        <UncontrolledTooltip delay={0} placement="bottom" target="security2">
          High Security
        </UncontrolledTooltip>
        <Button
          className="btn1"
          id="security3"
          onClick={() => {
            if (isAdvance) {
              setIsAdvance(false);
              setMinHours(minHours + 45);
              SetMaxhours(maxHours + 60);
            } else {
              setIsAdvance(true);
              setMinHours(minHours - 45);
              SetMaxhours(maxHours - 60);
            }
          }}
          disabled={!isHigh || !isBase}
        >
          <img
            alt="..."
            // className="rounded-circle img-raised"
            src={require("assets/img/advanced.png")}
          ></img>
        </Button>
        <UncontrolledTooltip delay={0} placement="bottom" target="security3">
          Advanced Security
        </UncontrolledTooltip>
      </Col>
    </div>
  );
}
