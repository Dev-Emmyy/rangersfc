import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)', py: { xs: 6, md: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: { xs: 200, md: 300 }, px: 2 }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 40, sm: 60, md: 80 }, color: '#FFFFFF', textAlign: 'center' }}>WEAR YOUR PRIDE</Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 20 }, color: '#FFFFFF', textAlign: 'center' }}>Official Rangers International FC Merchandise</Typography>
      </Box>
      <Box sx={{ bgcolor: '#000000', height: { xs: 'auto', md: 56 }, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', py: { xs: 2, md: 0 }, px: 2 }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 12, sm: 16, md: 24 }, color: '#FFFFFF', textAlign: 'center' }}>FREE SHIPPING ON ORDERS OVER ₦100,000 | AUTHENTIC PRODUCTS | OFFICIAL CLUB STORE</Typography>
      </Box>
    </>
  );
};

export default HeroSection;