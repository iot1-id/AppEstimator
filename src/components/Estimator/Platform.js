import React from 'react'
import {
  
  Col,
  
} from "reactstrap";
import CustomButton from "components/Custom-button/custom-button.component";

export default function Platform({ minHours, setMinHours, maxHours, SetMaxhours }) {
  const [isAndroidBC, setIsAndroidBC] = React.useState(true);
  const [isAppleBC, setIsAppleBC] = React.useState(true);
  const [isWebBC, setIsWebBC] = React.useState(true);

  return (
    <div className="center">
      <br />
      <hr className="style1" />
      <br />
      <h1 className="headings">1. Your Required Platform</h1>
      <br />
      <Col>
        <CustomButton
          onClick={(e) => {
            e.preventDefault();
            if (isAndroidBC) {
              setIsAndroidBC(false);
              setMinHours(minHours + 48);
              SetMaxhours(maxHours + 75);
            } else {
              setIsAndroidBC(true);
              setMinHours(minHours - 48);
              SetMaxhours(maxHours - 75);
            }
          }}
          disabled={!isAppleBC || !isWebBC}
        >
          Android&nbsp;&nbsp;
          <i className="fab fa-android"></i>
        </CustomButton>
        <CustomButton
          onClick={() => {
            // if (isAppleBC && isAndroidBC) {
            //   setIsAppleBC(false);
            //   setMinHours(minHours + 32);
            //   SetMaxhours(maxHours + 35);
            // }
            if (isAppleBC) {
              setIsAppleBC(false);
              setMinHours(minHours + 48);
              SetMaxhours(maxHours + 75);
            } else {
              setIsAppleBC(true);
              setMinHours(minHours - 48);
              SetMaxhours(maxHours - 75);
            }
          }}
          disabled={!isAndroidBC || !isWebBC}
        >
          IOS&nbsp;&nbsp;
          <i class="fab fa-apple"></i>
        </CustomButton>
        <CustomButton
          onClick={() => {
            if (isWebBC) {
              setIsWebBC(false);
              setMinHours(minHours + 48);
              SetMaxhours(maxHours + 75);
            } else {
              setIsWebBC(true);
              setMinHours(minHours - 48);
              SetMaxhours(maxHours - 75);
            }
          }}
          disabled={!isAndroidBC || !isAppleBC}
        >
          Web&nbsp;&nbsp;
          <i class="fas fa-file-code"></i>
        </CustomButton>
      </Col>
    </div>
  );
}
