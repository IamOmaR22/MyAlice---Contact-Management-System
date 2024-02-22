import React from 'react';
import axiosInstance from '../axios';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Delete() {
  const navigate = useNavigate(); // Use useNavigate
  const { slug } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .delete(`delete/${slug}/`)
      .then(() => {
        navigate('/');
        window.location.reload();
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Press here to confirm delete
        </Button>
      </Box>
    </Container>
  );
}
