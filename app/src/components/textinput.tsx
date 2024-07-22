'use client'
import { TextField } from '@mui/material';
import React from 'react';

const TextInput = ({ label }: { label: string }) => {
  return <TextField label={label} variant="outlined" fullWidth />;
};

export default TextInput;