const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];


const blackColor = "#000";

const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const checkboxAdnRadioStyle = {
  root: {
    padding: "13px",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  labelRoot: {
    marginLeft: "-14px",
  },
  checked: {
    color: primaryColor[0] + "!important",
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px",
  },
  radio: {
    color: primaryColor[0] + "!important",
  },
  radioChecked: {
    width: "20px",
    height: "20px",
    border: "1px solid " + primaryColor[0],
    borderRadius: "50%",
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "50%",
  },
};

export default checkboxAdnRadioStyle;
