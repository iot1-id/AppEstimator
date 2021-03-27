import React from "react";
import {Row,Col} from "reactstrap"
import Fab from "@material-ui/core/Fab";
import "../../assets/scss/estimate.scss";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: 1,
      color: "#fff",
    },
    root: {
      height: 0,
      flexGrow: 1,
    },
    speedDial: {
      position: "fixed",
      bottom: theme.spacing(20),
      left: theme.spacing(2),
      height: theme.spacing(10),
      width: theme.spacing(12),
      padding: theme.spacing(4),
      display: "flex",
    },
    row: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem",
      
    },
    row1: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: ".8rem",
      whiteSpace: "nowrap",
      fontWeight: 1000,
    },
  })
);

export default function FloatingActionButtons({ minHours, maxHours }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        className={classes.speedDial}
        variant="extended"
        aria-label="estimation"
        disabled
      >
        <Col>
          <Row className={classes.row1}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <u>Est. Hours</u>
          </Row>
          <Row className={classes.row}>
            <h3>{(minHours + maxHours) / 2}</h3>
          </Row>
        </Col>
      </Fab>
    </div>
  );
}
