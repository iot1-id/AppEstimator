
import tooltipStyle from "./tooltipStyle";
import checkboxAdnRadioStyle from "./checkboxAdnRadioStyle";

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];

const grayColor = [
  "#999",
  "#777",
  "#3C4858",
  "#AAAAAA",
  "#D2D2D2",
  "#DDD",
  "#b4b4b4",
  "#555555",
  "#333",
  "#a9afbb",
  "#eee",
  "#e7e7e7",
];
const tasksStyle = {
  ...tooltipStyle,
  ...checkboxAdnRadioStyle,
  table: {
    marginBottom: "0",
    overflow: "visible",
  },
  tableRow: {
    position: "relative",
    borderBottom: "1px solid " + grayColor[5],
  },
  tableActions: {
    display: "flex",
    border: "none",
    padding: "12px 8px !important",
    verticalAlign: "middle",
  },
  tableCell: {
    ...defaultFont,
    padding: "8px",
    verticalAlign: "middle",
    border: "none",
    lineHeight: "1.42857143",
    fontSize: "14px",
  },
  tableCellRTL: {
    textAlign: "right",
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px",
  },
  edit: {
    backgroundColor: "transparent",
    color: primaryColor[0],
    boxShadow: "none",
  },
  close: {
    backgroundColor: "transparent",
    color: dangerColor[0],
    boxShadow: "none",
  },
};
export default tasksStyle;
