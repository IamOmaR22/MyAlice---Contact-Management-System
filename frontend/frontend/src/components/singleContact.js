import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: 300, // Adjust as needed
  objectFit: 'cover',
}));

const SingleContact = () => {
  const { slug } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axiosInstance.get(`/${slug}`);
        setContact(response.data);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [slug]);

  const handleEdit = () => {
    // Redirect to edit page
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <Container maxWidth="md">
      <StyledCard>
        <StyledCardMedia
          component="img"
          image="https://source.unsplash.com/random"
          title="Contact Image"
        />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {contact.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            <strong>Email:</strong> {contact.email}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            <strong>Phone:</strong> {contact.phone_number}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Address:</strong> {contact.address}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={handleEdit}
          component={RouterLink}
          to={`/edit/${slug}`}
        >
          Edit
        </Button>
      </StyledCard>
      {/* <Link href="/" variant="body2">
        Back to Contacts
      </Link> */}
    </Container>
  );
};

export default SingleContact;
