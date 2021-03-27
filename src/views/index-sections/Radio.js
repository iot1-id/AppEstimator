import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function FormControlLabelPlacement() {
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="Cloud database"
          labelPlacement="start"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Internal Database"
          labelPlacement="start"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="Existing Database"
          labelPlacement="start"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="primary" />}
          label="Not required"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  );
}
