import React from 'react'
import CustomButton from "components/Custom-button/custom-button.component";
import { Col } from "reactstrap";

export default function Pages({ minHours, setMinHours, maxHours, SetMaxhours }) {
  const [isTen, setIsTen] = React.useState(true);
  const [isFifty, setIsFifty] = React.useState(true);
  const [isHundred, setIsHundred] = React.useState(true);
  return (
    <div className="center">
      <br />
      <hr className="style1" />
      <br />
      <h1 className="headings">2. Number of Pages in your Application</h1>
      <br />
      <Col>
        <CustomButton
          onClick={() => {
            if (isTen) {
              setIsTen(false);
              setMinHours(minHours + 5);
              SetMaxhours(maxHours + 10);
            } else {
              setIsTen(true);
              setMinHours(minHours - 5);
              SetMaxhours(maxHours - 10);
            }
          }}
          disabled={!isFifty || !isHundred}
        >
          10+
        </CustomButton>
        <CustomButton
          onClick={() => {
            // if (isAppleBC && isAndroidBC) {
            //   setIsAppleBC(false);
            //   setMinHours(minHours + 32);
            //   SetMaxhours(maxHours + 35);
            // }
            if (isFifty) {
              setIsFifty(false);
              setMinHours(minHours + 30);
              SetMaxhours(maxHours + 50);
            } else {
              setIsFifty(true);
              setMinHours(minHours - 30);
              SetMaxhours(maxHours - 50);
            }
          }}
          disabled={!isTen || !isHundred}
        >
          50+
        </CustomButton>
        <CustomButton
          onClick={() => {
            if (isHundred) {
              setIsHundred(false);
              setMinHours(minHours + 60);
              SetMaxhours(maxHours + 80);
            } else {
              setIsHundred(true);
              setMinHours(minHours - 60);
              SetMaxhours(maxHours - 80);
            }
          }}
          disabled={!isFifty || !isTen}
        >
          100+
        </CustomButton>
      </Col>
    </div>
  );
}
