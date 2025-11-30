import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ background: 'linear-gradient(90deg, #E74C3C 0%, #C0392B 100%)', py: { xs: 8, md: 12 }, px: { xs: 2, md: 0 } }}>
      <Container maxWidth="xl">
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 48, sm: 64, md: 96 }, fontWeight: 400, color: '#FFFFFF', textAlign: 'center', mb: 2 }}>RANGERS NEWS CENTRE</Typography>
        <Typography sx={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: { xs: 16, sm: 20, md: 24 }, fontWeight: 400, color: '#FFFFFF', textAlign: 'center', px: { xs: 2, md: 0 } }}>Stay updated with the latest from Rangers International FC</Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;