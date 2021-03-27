import React from "react";
import { Col, Row, UncontrolledTooltip } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import AddBoxTwoToneIcon from "@material-ui/icons/AddBoxTwoTone";
import IndeterminateCheckBoxTwoToneIcon from "@material-ui/icons/IndeterminateCheckBoxTwoTone";
import CustomButton from "components/Custom-button/custom-button.component";

export default function Squad() {
  const [isFresherCount, setFresherCount] = React.useState(0);
  const [isJuniorCount, setJuniorCount] = React.useState(0);
  const [isSeniorCount, setSeniorCount] = React.useState(0);
  return (
    <div className="center">
      <br />
      <hr className="style1" />
      <br />
      <h1 className="headings">Select your squad</h1>
      <br />
      <Row>
        <Col className="d-flex flex-row-reverse">
          <IconButton
            color="primary"
            component="span"
            onClick={() => {
              if (isFresherCount >= 1) {
                setFresherCount(isFresherCount - 1);
              }
            }}
            disabled={!isFresherCount}
          >
            <IndeterminateCheckBoxTwoToneIcon />
          </IconButton>
        </Col>
        <Col>
          <CustomButton id="tooltip1">Freshers: {isFresherCount}</CustomButton>
          <UncontrolledTooltip delay={0} placement="top" target="tooltip1">
            Freshers are developers with little to no Experience.
          </UncontrolledTooltip>
          <br />
        </Col>
        <Col className="d-flex flex-row">
          <IconButton
            color="primary"
            component="span"
            onClick={() => {
              if (isFresherCount < 8) {
                setFresherCount(isFresherCount + 1);
              }
            }}
          >
            <AddBoxTwoToneIcon />
          </IconButton>
        </Col>
      </Row>
      <hr className="style2" />
      <Row>
        <Col className="d-flex flex-row-reverse">
          <IconButton
            color="primary"
            component="span"
            onClick={() => {
              if (isJuniorCount >= 1) {
                setJuniorCount(isJuniorCount - 1);
              }
            }}
            disabled={!isJuniorCount}
          >
            <IndeterminateCheckBoxTwoToneIcon />
          </IconButton>
        </Col>
        <Col>
          <CustomButton id="tooltip2">
            Junior Devs: {isJuniorCount}
          </CustomButton>
          <UncontrolledTooltip delay={0} placement="top" target="tooltip2">
            Junior Developers have mid to high tier Experience.
          </UncontrolledTooltip>
          <br />
        </Col>
        <Col className="d-flex flex-row">
          <IconButton
            color="primary"
            component="span"
            onClick={() => {
              if (isJuniorCount < 8) {
                setJuniorCount(isJuniorCount + 1);
              }
            }}
          >
            <AddBoxTwoToneIcon />
          </IconButton>
        </Col>
      </Row>
      <hr className="style2" />
      <Row className="">
        <Col className="d-flex flex-row-reverse">
          <IconButton
            color="primary"
            component="span"
            onClick={() => {
              if (isSeniorCount >= 1) {
                setSeniorCount(isSeniorCount - 1);
              }
            }}
            disabled={!isSeniorCount}
          >
            <IndeterminateCheckBoxTwoToneIcon />
          </IconButton>
        </Col>
        <Col>
          <CustomButton id="tooltip3">
            Senior Devs: {isSeniorCount}
          </CustomButton>
          <UncontrolledTooltip delay={0} placement="bottom" target="tooltip3">
            Senior Developers have expert or advanced level of Experience.
          </UncontrolledTooltip>
          <br />
        </Col>
        <Col className="d-flex flex-row">
          <IconButton
            color="primary"
            component="span"
            onClick={() => {
              if (isSeniorCount < 5) {
                setSeniorCount(isSeniorCount + 1);
              }
            }}
          >
            <AddBoxTwoToneIcon />
          </IconButton>
        </Col>
      </Row>
    </div>
  );
}
