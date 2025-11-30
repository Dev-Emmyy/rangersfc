import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Image from 'next/image';

const Partners = () => {
  const topLogos = [
    { src: 'https://ik.imagekit.io/4bvbtnlkl/All%20Logos%201.png', alt: 'Partner 1' },
    { src: 'https://ik.imagekit.io/4bvbtnlkl/All%20Logos%202.png?updatedAt=1764439895998', alt: 'Partner 2' },
    { src: 'https://ik.imagekit.io/4bvbtnlkl/All%20Logos%203.png', alt: 'Partner 3' },
    { src: 'https://ik.imagekit.io/4bvbtnlkl/All%20Logos%204.png', alt: 'Partner 4' },
    { src: 'https://ik.imagekit.io/4bvbtnlkl/All%20Logos%205.png', alt: 'Partner 5' }
  ];

  const bottomLogos = [
    { src: 'https://ik.imagekit.io/4bvbtnlkl/All%20Logos%206.png', alt: 'Partner 6' },
    { src: 'https://ik.imagekit.io/4bvbtnlkl/All%20Logos%207.png', alt: 'Partner 7' }
  ];

  return (
    <Box sx={{ bgcolor: '#898989', py: { xs: 6, md: 8 }, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="xl">
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: '#FFFFFF', textAlign: 'center', mb: 2 }}>
          OUR VALUED PARTNERS
        </Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, fontWeight: 400, color: '#FFFFFF', textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
          Thank you to our partners who help us achieve greatness both on and off the pitch
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 3, sm: 4, md: 6 }, mb: { xs: 4, md: 6 }, flexWrap: 'wrap' }}>
          {topLogos.map((logo, index) => (
            <Box key={index} sx={{ position: 'relative', width: { xs: 100, sm: 120, md: 150 }, height: { xs: 60, sm: 70, md: 80 } }}>
              <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 3, sm: 4, md: 6 }, flexWrap: 'wrap' }}>
          {bottomLogos.map((logo, index) => (
            <Box key={index} sx={{ position: 'relative', width: { xs: 100, sm: 120, md: 150 }, height: { xs: 60, sm: 70, md: 80 } }}>
              <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;