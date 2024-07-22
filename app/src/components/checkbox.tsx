'use client'
import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

const CheckboxInput = ({ label }: { label: string }) => {
  return <FormControlLabel control={<Checkbox />} label={label} />;
};

export default CheckboxInput;