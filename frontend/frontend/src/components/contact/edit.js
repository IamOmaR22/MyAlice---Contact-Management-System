import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles

function slugify(string) {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  marginTop: '50px',
  marginBottom: '50px',
});

const StyledAvatar = styled(Avatar)({
  margin: '8px',
  backgroundColor: '#1976d2',
});

const StyledTitle = styled(Typography)({
  marginTop: '16px',
  marginBottom: '16px',
  fontWeight: 'bold',
  color: '#333333',
});

const StyledForm = styled('form')({
  width: '100%',
  marginTop: '8px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
});

const StyledButton = styled(Button)({
  margin: '24px 0',
  padding: '12px 20px',
  fontWeight: 'bold',
  fontSize: '16px',
});

export default function Edit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
    slug: '',
    author: null,
  });

  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axiosInstance.get(`edit/${slug}/`);
        const contactData = response.data;
        setFormData(contactData);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      const slug = slugify(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        slug: slug,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put(`edit/${slug}/`, formData)
      .then((res) => {
        console.log('Contact updated:', res.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating contact:', error);
      });
  };

  if (!formData.name) return <p>Loading...</p>;

  return (
    <StyledContainer component="main" maxWidth="xs">
      <CssBaseline />
      <StyledAvatar></StyledAvatar>
      <StyledTitle variant="h5">
        Edit Contact
      </StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="phone_number"
              label="Phone Number"
              name="phone_number"
              autoComplete="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              fullWidth
              id="slug"
              label="Slug"
              name="slug"
              autoComplete="slug"
              value={formData.slug}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Update Contact
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}
