import React, { useState } from 'react';
import axiosInstance from '../axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', username: '', password: '' });
  const [error, setError] = useState({ email: '', username: '', password: '', general: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`user/register/`, {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      });
      navigate('/login'); // Navigate to login page after successful signup
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;
        if (errorData.email) {
          setError({ ...error, email: errorData.email[0] });
        }
        if (errorData.user_name) {
          setError({ ...error, username: errorData.user_name[0] });
        }
        if (errorData.password) {
          setError({ ...error, password: errorData.password[0] });
        }
        if (errorData.detail) {
          setError({ ...error, general: errorData.detail });
        }
      } else {
        setError({ ...error, general: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={formData.email}
                variant="outlined"
                error={!!error.email}
                helperText={error.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                onChange={handleChange}
                required
                value={formData.username}
                variant="outlined"
                error={!!error.username}
                helperText={error.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                onChange={handleChange}
                required
                type="password"
                value={formData.password}
                variant="outlined"
                error={!!error.password}
                helperText={error.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          {error.general && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              {error.general}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end" mb={6}>
            <Grid item>
              <RouterLink to="/login" variant="body2">
                Already have an account? Sign in
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
