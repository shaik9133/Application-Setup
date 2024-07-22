'use client'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';

const Dropdown = ({ label, options }: { label: string, options: string[] }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select>
        {options.map(option => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;