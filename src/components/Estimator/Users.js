import React from 'react'
import CustomButton from "components/Custom-button/custom-button.component";
import { Col } from "reactstrap";

export default function Users({ minHours, setMinHours, maxHours, SetMaxhours }) {
    const [is100, setIs100] = React.useState(true);
    const [is1k, setIs1k] = React.useState(true);
    const [is10k, setIs10k] = React.useState(true);
  return (
    <div className="center">
      <br />
      <hr className="style1" />
      <br />

      <h1 className="headings">Number of Expected Users</h1>
      <br />
      <Col>
        <CustomButton
          onClick={() => {
            if (is100) {
              setIs100(false);
              setMinHours(minHours + 5);
              SetMaxhours(maxHours + 10);
            } else {
              setIs100(true);
              setMinHours(minHours - 5);
              SetMaxhours(maxHours - 10);
            }
          }}
          disabled={!is1k || !is10k}
        >
          Less than 100
        </CustomButton>
        <CustomButton
          onClick={() => {
            if (is1k) {
              setIs1k(false);
              setMinHours(minHours + 25);
              SetMaxhours(maxHours + 40);
            } else {
              setIs1k(true);
              setMinHours(minHours - 25);
              SetMaxhours(maxHours - 40);
            }
          }}
          disabled={!is100 || !is10k}
        >
          1,000 to 10,000
        </CustomButton>
        <CustomButton
          onClick={() => {
            if (is10k) {
              setIs10k(false);
              setMinHours(minHours + 50);
              SetMaxhours(maxHours + 75);
            } else {
              setIs10k(true);
              setMinHours(minHours - 50);
              SetMaxhours(maxHours - 75);
            }
          }}
          disabled={!is1k || !is100}
        >
          More than 10,000
        </CustomButton>
      </Col>
    </div>
  );
}
