import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const MainContent = () => {
  const stats = [
    { number: '10,000+', label: 'Young People Reached' },
    { number: '50+', label: 'Communities Served' },
    { number: '15', label: 'Facilities Built/Renovated' },
    { number: '200+', label: 'Coaches Trained' }
  ];

  const mission = [
    { title: 'VOLUNTEER', desc: 'Become a Rangers Foundation volunteer and help us make a difference in communities.', btn: 'APPLY NOW' },
    { title: 'PARTNER WITH US', desc: 'Corporate and organizational partnerships help us expand our impact and reach more people.', btn: 'PARTNERSHIP INQUIRY' },
    { title: 'DONATE', desc: 'Your contribution directly supports programs that change young lives and build futures.', btn: 'DONATE NOW' }
  ];

  return (
    <>
      <Box sx={{ bgcolor: '#1A1A1A', py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, color: '#FFFFFF', textAlign: 'center', mb: { xs: 4, md: 6 } }}>OUR REACH</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 4, textAlign: 'center' }}>
            {stats.map((stat, i) => (
              <Box key={i}>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 36, sm: 42, md: 48 }, color: '#E74C3C', mb: 1 }}>{stat.number}</Typography>
                <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, color: '#FFFFFF' }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#F9FAFB', py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, color: '#1A1A1A', textAlign: 'center', mb: { xs: 4, md: 6 } }}>JOIN OUR MISSION</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3, justifyItems: 'center' }}>
            {mission.map((item, i) => (
              <Box key={i} sx={{ width: '100%', maxWidth: 365.6, height: 'auto', minHeight: { xs: 250, md: 270 }, bgcolor: '#FFFFFF', borderRadius: '10px', borderTop: '4px solid #E74C3C', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 20, md: 24 }, color: '#1A1A1A', mb: 2, textAlign: 'center' }}>{item.title}</Typography>
                  <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, color: '#4A5565', textAlign: 'center' }}>{item.desc}</Typography>
                </Box>
                <Button sx={{ bgcolor: '#E74C3C', borderRadius: '10px', py: 1.5, '&:hover': { bgcolor: '#C0392B' } }}>
                  <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#FFFFFF' }}>{item.btn}</Typography>
                </Button>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box sx={{ position: 'relative', height: { xs: 350, sm: 400, md: 384 }, backgroundImage: 'url("https://ik.imagekit.io/4bvbtnlkl/Section%20(13).png")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, px: 2, '&::before': { content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.9) 0%, rgba(192, 57, 43, 0.8) 100%)', zIndex: 1 } }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, color: '#FFFFFF', position: 'relative', zIndex: 2, textAlign: 'center' }}>TOGETHER, WE CAN MAKE A DIFFERENCE</Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, color: '#FFFFFF', position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 800, px: 2 }}>Join us in using the power of football to transform lives and build stronger communities.</Typography>
        <Button sx={{ width: { xs: '80%', sm: 164.56 }, maxWidth: 200, height: { xs: 48, md: 53.2 }, bgcolor: '#FFFFFF', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', position: 'relative', zIndex: 2, '&:hover': { bgcolor: '#F5F5F5' } }}>
            <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#E74C3C' }}>GET STARTED TODAY</Typography>
        </Button>
      </Box>
    </>
  );
};

export default MainContent;