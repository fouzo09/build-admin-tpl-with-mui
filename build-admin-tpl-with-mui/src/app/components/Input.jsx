import React from 'react'
import { TextField, styled, Box, InputAdornment, MenuItem} from '@mui/material';
import '../assets/css/app.css';
import { LockClockOutlined, Password, PasswordOutlined, PhoneAndroidOutlined } from '@mui/icons-material';

const currencies = [
  {
    value: 'SN',
    label: '+221',
  },
  {
    value: 'CIV',
    label: '+222',
  },
  {
    value: 'TG',
    label: '+223',
  },
  {
    value: 'GN',
    label: '+224',
  },
];

export function InputText({label, required}) {

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField label={label} 
                  className="input" 
                  variant="standard" 
                  fullWidth={true} 
                  
                  
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneAndroidOutlined />
                      </InputAdornment>
                    ),
                    startAdornment: (
                      <InputAdornment position="start">
                        <TextField
                                select
                                value={currency}
                                onChange={handleChange}
                                variant="standard"
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                      </InputAdornment>
                    )
                  }}
                  required/>
  );
}


export function InputPassword({label, required}) {
    return (
      <TextField label={label} 
                  className="input" 
                  variant="standard" 
                  type="password"
                  fullWidth={true}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PasswordOutlined />
                      </InputAdornment>
                    )
                  }}
                  required/>
    );
}

export function ButtonSave({label}) {
    return (
      <TextField label={label} 
                  className="input" 
                  variant="standard" 
                  type="password"
                  fullWidth={true} 
                  required/>
    );
}

export const FormGroup = styled('div')({
  marginBottom: '32px',
  width: '80%'
});
