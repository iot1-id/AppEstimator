import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  Col,
  UncontrolledTooltip,
  CardHeader,
  Card,
  CardBody,
  Row,
} from "reactstrap";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 1,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    // height: 48,
    padding: "0 30px",
  },
});

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Platforms", 159),
  createData("Pages", 237),
  createData("Database", 262),
  createData("Number of Users", 305),
  createData("General Features", 356),
  createData("Admin Features", 356),
  createData("Authentication Features", 356),
  createData("Media Features", 356),
  createData("Ecommerce Features", 356),
  createData("Social Features", 356),
  createData("Customization Level", 356),
  createData("Level of Security", 356),
  createData("Squad Members", "Fresher Devs:x, Junior Devs: x, Senior Devs: x"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
      <Col className="ml-auto mr-auto" md="10" xl="6">
        <p className="category">Your Selections</p>
        <Card>
          <CardBody>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Components</TableCell>
                    <TableCell align="center">Selections</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
