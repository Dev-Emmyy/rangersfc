import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';

const MainContent = () => {
  return (
    <>
      <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '556px 1fr' }, gap: 4, alignItems: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 556.4 }}>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, md: 40 }, fontWeight: 400, color: '#1A1A1A', mb: 1 }}>OUR HOME</Typography>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, fontWeight: 400, color: '#1A1A1A', mb: 3 }}>NNAMDI AZIKIWE STADIUM</Typography>
              <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, fontWeight: 400, color: '#4A5565', mb: 4 }}>The Nnamdi Azikiwe Stadium isn&apos;t just where we play—it&apos;s where magic happens. This iconic venue has witnessed some of Nigerian football&apos;s greatest moments, and on match days, it transforms into a cauldron of passion as thousands of Rangers faithful create an atmosphere unlike any other.</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image src='/map-pin.png' width={20} height={20}  alt='map-pin'/>
                  <Box>
                    <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 13, md: 14 }, fontWeight: 400, color: '#6A7282' }}>Location</Typography>
                    <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, fontWeight: 400, color: '#1A1A1A' }}>Enugu, Enugu State</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image src='/person.png' width={20} height={20}  alt='person'/>
                  <Box>
                    <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 13, md: 14 }, fontWeight: 400, color: '#6A7282' }}>Capacity</Typography>
                    <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, fontWeight: 400, color: '#1A1A1A' }}>22,000 Passionate Fans</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: '100%', maxWidth: 556.4, height: { xs: 250, sm: 300, md: 384 }, borderRadius: '10px', boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.25)', backgroundImage: 'url("https://ik.imagekit.io/4bvbtnlkl/ImageWithFallback.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#000000', py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: '#FFFFFF', textAlign: 'center', mb: { xs: 4, md: 6 } }}>FIRST TEAM TO GRASSROOTS</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, justifyItems: 'center' }}>
            {[
              { title: "MEN'S FIRST TEAM", desc: 'Competing at the highest level of Nigerian football' },
              { title: "WOMEN'S TEAM", desc: "Champions developing the future of women's football" },
              { title: 'YOUTH ACADEMY', desc: 'Nurturing the stars of tomorrow' },
              { title: 'RANGERS FOUNDATION', desc: 'Making a difference beyond the pitch' }
            ].map((item, i) => (
              <Box key={i} sx={{ width: '100%', maxWidth: 272.2, height: 'auto', minHeight: { xs: 130, md: 139.6 }, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', p: 3 }}>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 18, md: 20 }, fontWeight: 400, color: '#E74C3C', mb: 2 }}>{item.title}</Typography>
                <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, fontWeight: 400, color: '#FFFFFF' }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#FFFFFF', py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: '#1A1A1A', textAlign: 'center', mb: { xs: 4, md: 6 } }}>LEADERSHIP</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, justifyItems: 'center' }}>
            {[
              { name: 'Dr. Emmanuel Acho', role: 'Chairman' },
              { name: 'Davidson Owumi', role: 'General Manager' },
              { name: 'Fidelis Ilechukwu', role: 'Head Coach' },
              { name: 'Chukwuma Ubah', role: 'Head of IT & Innovation' }
            ].map((person, i) => (
              <Box key={i} sx={{ textAlign: 'center' }}>
                <Box sx={{ width: { xs: 120, md: 160 }, height: { xs: 120, md: 160 }, bgcolor: '#E5E7EB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, mx: 'auto' }}>
                  <Image src="/profile.png" width={64} height={64} alt="Profile" />
                </Box>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 18, md: 20 }, fontWeight: 400, color: '#1A1A1A', mb: 0.5 }}>{person.name}</Typography>
                <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, fontWeight: 400, color: '#4A5565' }}>{person.role}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MainContent;