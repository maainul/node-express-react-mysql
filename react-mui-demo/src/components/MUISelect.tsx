import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export default function MUISelect() {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value= event.target.value;
    setCountries(typeof value=== 'string' ? value.split(',') : value);
  };

  return (
    <Box width='250px'>
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple:true
        }}
      >
        <MenuItem value="BD">Bangladesh</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
      </TextField>
    </Box>
  );
}
