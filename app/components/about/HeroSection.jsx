import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: { xs: 250, sm: 300, md: 384 }, backgroundImage: 'url("https://ik.imagekit.io/4bvbtnlkl/Section%20(4).png")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2 }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 56, sm: 80, md: 128 }, fontWeight: 400, color: '#FFFFFF', textAlign: 'center', textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>OUR STORY</Typography>
      </Box>
      <Box sx={{ bgcolor: '#FFFFFF', py: { xs: 6, md: 8 }, px: { xs: 3, md: 0 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: '#1A1A1A', textAlign: 'center', mb: 4 }}>A LEGACY OF EXCELLENCE</Typography>
          <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, fontWeight: 400, color: '#4A5565', maxWidth: 900, mx: 'auto', mb: 3 }}>Rangers International Football Club was established with a vision to create not just a football team, but an institution that would represent the pride and aspirations of Enugu State. Over the decades, we&apos;ve evolved into one of Nigerian football&apos;s most respected names.</Typography>
          <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, fontWeight: 400, color: '#4A5565', maxWidth: 900, mx: 'auto' }}>Our history is decorated with league titles, cup victories, and unforgettable moments that have etched our name in the annals of Nigerian football. But beyond trophies, we&apos;ve built something more enduring—a legacy of developing talent, inspiring communities, and upholding the beautiful game&apos;s finest values.</Typography>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#F9FAFB', py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: '#1A1A1A', textAlign: 'center', mb: { xs: 4, md: 6 } }}>THE RANGERS WAY</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, justifyItems: 'center' }}>
            {[
              { icon: <Image src="/pride.png" width={64.8} height={64.8} alt="Pride" />, title: 'EXCELLENCE', desc: 'We pursue greatness in everything we do, from youth development to first-team performance.' },
              { icon: <Image src="/safe.png" width={64.8} height={64.8} alt="Safe" />, title: 'INTEGRITY', desc: 'We play with honor, respect our opponents, and uphold the spirit of fair play.' },
              { icon: <Image src="/persons.png" width={64.8} height={64.8} alt="Persons" />, title: 'COMMUNITY', desc: "We're more than a club—we're a family that extends from our players to our fans." },
              { icon: <Image src="/growth.png" width={64.8} height={64.8} alt="Growth" />, title: 'DEVELOPMENT', desc: 'We invest in young talent, providing pathways for the next generation of Nigerian football stars.' }
            ].map((item, i) => (
              <Box key={i} sx={{ width: '100%', maxWidth: 266.2, height: 'auto', minHeight: { xs: 280, md: 304 }, bgcolor: '#FFFFFF', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', p: 3, textAlign: 'center' }}>
                <Box sx={{ width: 80, height: 80, bgcolor: '#FFFFFF', borderRadius: '16px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, mx: 'auto', fontSize: 32 }}>{item.icon}</Box>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 20, md: 24 }, fontWeight: 400, color: '#1A1A1A', mb: 2 }}>{item.title}</Typography>
                <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, fontWeight: 400, color: '#4A5565' }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;