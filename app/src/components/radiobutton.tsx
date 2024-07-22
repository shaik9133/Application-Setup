'use client'
import { Radio, FormControlLabel, RadioGroup } from '@mui/material';
import React from 'react';

const RadioButton = ({ label, options }: { label: string, options: string[] }) => {
  return (
    <RadioGroup>
      {options.map(option => (
        <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  );
};

export default RadioButton;