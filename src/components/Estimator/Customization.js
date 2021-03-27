import React from 'react'
import {
  Button,
  Col,
  UncontrolledTooltip,
  
} from "reactstrap";

export default function Customization({ minHours, setMinHours, maxHours, SetMaxhours }) {
  const [isMinimal, setIsMinimal] = React.useState(true);
  const [isBasic, setIsBasic] = React.useState(true);
  const [isPolished, setIsPolished] = React.useState(true);

  return (
    <div className="center">
      <br />
      <hr className="style1" />
      <br />
      <h1 className="headings">Level of Customization</h1>
      <br />
      <Col className="ml-auto mr-auto" md="10" xl="6">
        <Button
          id="ui1"
          className="btn1"
          onClick={() => {
            if (isMinimal) {
              setIsMinimal(false);
              setMinHours(minHours + 10);
              SetMaxhours(maxHours + 25);
            } else {
              setIsMinimal(true);
              setMinHours(minHours - 10);
              SetMaxhours(maxHours - 25);
            }
          }}
          disabled={!isBasic || !isPolished}
        >
          <img
            alt="..."
            // className="rounded-circle img-raised"
            src={require("assets/img/minimal.png")}
          ></img>
        </Button>
        <UncontrolledTooltip delay={0} placement="bottom" target="ui1">
          Minimalistic User Interface
        </UncontrolledTooltip>
        <Button
          id="ui2"
          className="btn1"
          onClick={() => {
            if (isBasic) {
              setIsBasic(false);
              setMinHours(minHours + 35);
              SetMaxhours(maxHours + 50);
            } else {
              setIsBasic(true);
              setMinHours(minHours - 35);
              SetMaxhours(maxHours - 50);
            }
          }}
          disabled={!isPolished || !isMinimal}
        >
          <img
            alt="..."
            // className="rounded-circle img-raised"
            src={require("assets/img/basic.png")}
          ></img>
        </Button>
        <UncontrolledTooltip delay={0} placement="bottom" target="ui2">
          Vibrant User Interface
        </UncontrolledTooltip>
        <Button
          id="ui3"
          className="btn1"
          onClick={() => {
            if (isPolished) {
              setIsPolished(false);
              setMinHours(minHours + 50);
              SetMaxhours(maxHours + 75);
            } else {
              setIsPolished(true);
              setMinHours(minHours - 50);
              SetMaxhours(maxHours - 75);
            }
          }}
          disabled={!isMinimal || !isBasic}
        >
          <img
            alt="..."
            // className="rounded-circle img-raised"
            src={require("assets/img/polished.png")}
          ></img>
        </Button>
        <UncontrolledTooltip delay={0} placement="bottom" target="ui3">
          Highly Polished User Interface
        </UncontrolledTooltip>
      </Col>
    </div>
  );
}
