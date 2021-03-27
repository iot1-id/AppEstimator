import React from "react";
import {
  socials,
  general1,
  general2,
  media,
  ecommerce,
  authentication,
} from "../../components/Features/general";
import minData from "../../components/json/min";
import { Col, Row } from "reactstrap";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

export default function Features({
  minHours,
  setMinHours,
  maxHours,
  SetMaxhours,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });
  //   const { gilad, jason, antoine } = state;
  let i = 0;
  const classes = useStyles();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked)
      setMinHours(minHours + minData[event.target.name]);
    else if(!event.target.checked)
    setMinHours(minHours - minData[event.target.name]);
  };

  const socialIterate = socials.map((socials) => {
    return (
      <FormControlLabel
        key={i++}
        control={<Checkbox onChange={handleChange} name={socials} />}
        label={socials}
      />
    );
  });
  const authIterate = authentication.map((authentication) => {
    return (
      <FormControlLabel
        key={i++}
        control={<Checkbox onChange={handleChange} name={authentication} />}
        label={authentication}
      />
    );
  });
  const general1Iterate = general1.map((general1) => {
    return (
      <FormControlLabel
        key={i++}
        control={<Checkbox onChange={handleChange} name={general1} />}
        label={general1}
      />
    );
  });
  const general2Iterate = general2.map((general2) => {
    return (
      <FormControlLabel
        key={i++}
        control={<Checkbox onChange={handleChange} name={general2} />}
        label={general2}
      />
    );
  });
  const mediaIterate = media.map((media) => {
    return (
      <FormControlLabel
        key={i++}
        control={<Checkbox onChange={handleChange} name={media} />}
        label={media}
      />
    );
  });
  const ecommerceIterate = ecommerce.map((ecommerce) => {
    return (
      <FormControlLabel
        key={i++}
        control={<Checkbox onChange={handleChange} name={ecommerce} />}
        label={ecommerce}
      />
    );
  });
  return (
    <div className="center">
      <br />

      <hr className="style1" />
      <br />
      <h1 className="headings">Features</h1>
      <br />
      <Row>
        <Col className="ml-auto mr-auto" md="10" xl="6">
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">General</FormLabel>
              <FormGroup>{general1Iterate}</FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Admin</FormLabel>
              <FormGroup>{general2Iterate}</FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Authentication</FormLabel>
              <FormGroup>{authIterate}</FormGroup>
            </FormControl>
          </div>
        </Col>
        <Col className="ml-auto mr-auto" md="10" xl="6">
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Media</FormLabel>
              <FormGroup>{mediaIterate}</FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Ecommerce</FormLabel>
              <FormGroup>{ecommerceIterate}</FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Socials</FormLabel>
              <FormGroup>{socialIterate}</FormGroup>
            </FormControl>
          </div>
        </Col>
      </Row>
    </div>
  );
}
