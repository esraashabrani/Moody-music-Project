import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("female");
//onChange
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">how much do you feel happy now?</FormLabel>
      <RadioGroup
        aria-label=" how much do you feel happy now?"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="0%" control={<Radio />} label="0%" />
        <FormControlLabel value="50%" control={<Radio />} label="50%" />
        <FormControlLabel value="100%" control={<Radio />} label="100%" />
      </RadioGroup>

      <FormLabel component="legend">
        Would you prefer the English songs or Arabic songs?
      </FormLabel>
      <RadioGroup
        aria-label=" how much do you feel happy now?"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="English" control={<Radio />} label="English" />
        <FormControlLabel value="Arabic" control={<Radio />} label="Arabic" />
      </RadioGroup>

      <FormLabel component="legend">
        Do you feel like you want to hear a romantic music?
      </FormLabel>
      <RadioGroup
        aria-label=" how much do you feel happy now?"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>

      <FormLabel component="legend">
        If you want to take a drive, who would you prefer to be with you from
        below choises?
      </FormLabel>
      <RadioGroup
        aria-label="If you want to take a drive, who would you prefer to be with you from below choises?"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Freinds" control={<Radio />} label="Freinds" />
        <FormControlLabel value="Family" control={<Radio />} label="Family" />
        <FormControlLabel value="Alone" control={<Radio />} label="Alone" />
      </RadioGroup>
      
    </FormControl>
  );
}
