import React from 'react'
import CustomButton from "components/Custom-button/custom-button.component";

export default function Database({ minHours, setMinHours, maxHours, SetMaxhours }) {
  const [isCloudBC, setIsCloudbBC] = React.useState(true);
  const [isIDBBC, setIsIDBBC] = React.useState(true);
  const [isEDBBC, setIsEDBBC] = React.useState(true);

  return (
    <div className="center">
      <br />
      <hr className="style1" />
      <br />
      <h1 className="headings">Choose Your Database</h1>
      <br />
      <CustomButton
        onClick={() => {
          if (isCloudBC) {
            setIsCloudbBC(false);
            setMinHours(minHours + 30);
            SetMaxhours(maxHours + 45);
          } else {
            setIsCloudbBC(true);
            setMinHours(minHours - 30);
            SetMaxhours(maxHours - 45);
          }
        }}
        disabled={!isIDBBC || !isEDBBC}
      >
        Cloud&nbsp;&nbsp;
        <i class="fas fa-cloud-upload-alt"></i>
      </CustomButton>

      <CustomButton
        onClick={() => {
          if (isIDBBC) {
            setIsIDBBC(false);
            setMinHours(minHours + 50);
            SetMaxhours(maxHours + 75);
          } else {
            setIsIDBBC(true);
            setMinHours(minHours - 50);
            SetMaxhours(maxHours - 75);
          }
        }}
        disabled={!isCloudBC || !isEDBBC}
      >
        Internal DB&nbsp;&nbsp;
        <i class="fas fa-database"></i>
      </CustomButton>
      <CustomButton
        onClick={() => {
          if (isEDBBC) {
            setIsEDBBC(false);
            setMinHours(minHours + 20);
            SetMaxhours(maxHours + 35);
          } else {
            setIsEDBBC(true);
            setMinHours(minHours - 20);
            SetMaxhours(maxHours - 35);
          }
        }}
        disabled={!isIDBBC || !isCloudBC}
      >
        Existing DB&nbsp;&nbsp;
        <i class="fas fa-server"></i>
      </CustomButton>
    </div>
  );
}
