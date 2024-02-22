import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography, Container, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: "56.25%", // 16:9
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const Contacts = (props) => {
  const { contacts } = props;
  if (!contacts || contacts.length === 0) return <p>No contacts, sorry</p>;
  return (
    <React.Fragment>
      <CardGrid maxWidth="md">
        <Grid container spacing={4}>
          {contacts.map((contact) => (
            <Grid item key={contact.id} xs={12} sm={6} md={4}>
                <Link
                  // href={`/{contact.slug}`}
                  href={`/${contact.slug}`}
                  underline="none" 
                  color="textPrimary">
              <StyledCard>
                <StyledCardMedia
                  image="https://source.unsplash.com/random"
                  title="Contact Image"
                />
                <StyledCardContent>
                  <Typography gutterBottom variant="h5">
                    {contact.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Email:</strong> {contact.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Phone:</strong> {contact.phone_number}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Address:</strong> {contact.address}
                  </Typography>
                </StyledCardContent>
              </StyledCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardGrid>
    </React.Fragment>
  );
}

export default Contacts;
