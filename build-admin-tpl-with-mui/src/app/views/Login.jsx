import React from 'react';
import { Avatar, Box, Button, Grid, InputAdornment, MenuItem, styled, TextField, Typography } from '@mui/material';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import { theme } from '../themes/theme';
import { PasswordOutlined, PhoneAndroidOutlined } from '@mui/icons-material';
import { currencies } from '../data/currencyData';
const logo = require('../assets/images/logo.png');

const LeftPanel = styled('div')(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    minHeight: '100vh',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}));

const RightPanel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  color: '#727082'
});

const LoginFormGroup = styled('div')({
  marginBottom: '32px',
  width: '80%',
});


const LoginBtnStyles = { 
  backgroundColor: 'primary', 
  fontSize: 14,
  fontFamily:'ubuntu',
  "&:hover":{
    backgroundColor: theme.palette.secondary
  }
}

function Login() {

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container 
              direction='row'
              spacing={2}>
            <Grid item
                  xs={6}
                  sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'block'}}}>
                <LeftPanel>
                   <Typography variant='h2' component='h2' mb={8} sx={{fontFamily:'ubuntu'}}>
                      Bienvenu chez nous !
                   </Typography>
                   <Typography component='p' p={2} sx={{lineHeight: 1.6 ,fontFamily:'ubuntu',letterSpacing:1.6,fontSize:18}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique. Quae vero repudiandae iusto nesciunt tenetur asperiores, amet earum itaque quisquam harum! Recusandae consequatur in neque. Ratione maiores totam laborum.
                   </Typography>
                </LeftPanel>
            </Grid>
            <Grid item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}>
                <RightPanel>
                    <Avatar src={logo} alt="logo" sx={{height: 300, width: 'auto'}} />
                    <LoginFormGroup>
                       <TextField label="Votre numéro de téléphone" 
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
                                <InputAdornment  position="start">
                                  <TextField
                                          select
                                          value={currency}
                                          onChange={handleChange}
                                          variant="standard"
                                          >
                                          {currencies.map((option) => (
                                              <MenuItem key={option.value} value={option.value}>
                                              <img
                                                loading="lazy"
                                                width="20"
                                                src={`https://flagcdn.com/w20/${option.value.toLowerCase()}.png`}
                                                srcSet={`https://flagcdn.com/w40/${option.value.toLowerCase()}.png 2x`}
                                                alt=""
                                              />
                                                  {option.label}
                                              </MenuItem>
                                          ))}
                                      </TextField>
                                </InputAdornment>
                              )
                            }}
                            required/>
                    </LoginFormGroup>
                    <LoginFormGroup>
                        <TextField label='Mot de passe' 
                            className="input" 
                            variant="standard" 
                            type="password"
                            sx={{fontFamily:'ubuntu'}}
                            fullWidth={true}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <PasswordOutlined />
                                </InputAdornment>
                              )
                            }}
                            required/>
                    </LoginFormGroup>
                    <LoginFormGroup>
                      <Button startIcon={<LoginTwoToneIcon />}
                              variant='contained'
                              size='large'
                              sx={LoginBtnStyles}> 
                          Connectez-vous 
                      </Button>                 
                    </LoginFormGroup>
                </RightPanel>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Login
