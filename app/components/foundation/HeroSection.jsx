import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
  const programs = [
    { icon: '/book.png', title: 'EDUCATION & LIFE SKILLS', desc: 'We partner with schools and community centers to use football as a tool for education. Our programs combine sports training with academic support, mentorship, and life skills development.' },
    { icon: '/bp.png', title: 'HEALTH & WELLNESS', desc: 'Through football and physical activity, we promote healthy lifestyles and wellbeing. Our initiatives include health screening camps, nutrition education, and mental health programs.' },
    { icon: '/town.png', title: 'COMMUNITY DEVELOPMENT', desc: 'We invest in building and refurbishing sports facilities, creating safe spaces where young people can play, learn, and grow. Our programs foster social cohesion and community pride.' },
    { icon: '/persons.png', title: "GIRLS' FOOTBALL INITIATIVE", desc: "We're committed to breaking down barriers and creating opportunities for girls and young women in football. Our programs provide coaching, mentorship, and pathways to participate." },
    { icon: '/empower.png', title: 'YOUTH EMPOWERMENT', desc: 'Through football coaching certifications, referee training, and sports administration workshops, we create employment opportunities and help young people build careers in sports.' },
    { icon: '/love.png', title: 'SOCIAL IMPACT', desc: 'We use the power of football to tackle important social challenges, unite communities, and create positive change across Enugu State and beyond.' }
  ];

  return (
    <>
      <Box sx={{ position: 'relative', height: { xs: 250, sm: 300, md: 384 }, backgroundImage: 'url("https://ik.imagekit.io/4bvbtnlkl/Section%20(13).png")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', px: 2, '&::before': { content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.9) 0%, rgba(192, 57, 43, 0.8) 100%)', zIndex: 1 } }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 48, sm: 64, md: 96 }, color: '#FFFFFF', position: 'relative', zIndex: 2, textAlign: 'center' }}>RANGERS FOUNDATION</Typography>
        <Typography sx={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: { xs: 16, sm: 20, md: 24 }, color: '#FFFFFF', position: 'relative', zIndex: 2, textAlign: 'center' }}>Changing Lives, Building Futures</Typography>
      </Box>
      <Box sx={{ bgcolor: '#FFFFFF', py: { xs: 6, md: 8 }, px: { xs: 3, md: 0 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: '#1A1A1A', textAlign: 'center', mb: 4 }}>WHY WE EXIST</Typography>
          <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, fontWeight: 400, color: '#4A5565', maxWidth: 900, mx: 'auto', mb: 3 }}>The Rangers Foundation extends our club&apos;s impact far beyond the football pitch. We believe that football has the unique power to unite, inspire, and create positive change.</Typography>
          <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, fontWeight: 400, color: '#4A5565', maxWidth: 900, mx: 'auto' }}>Through our programs, we&apos;re tackling important social challenges, providing opportunities for young people, and building stronger, healthier communities across Enugu State.</Typography>
        </Container>
      </Box>
      <Box sx={{ bgcolor: '#F9FAFB', py: { xs: 6, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, color: '#1A1A1A', textAlign: 'center', mb: { xs: 4, md: 6 } }}>OUR PROGRAMS</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3, justifyItems: 'center' }}>
            {programs.map((item, i) => (
              <Box key={i} sx={{ width: '100%', maxWidth: 365, bgcolor: '#FFFFFF', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', p: 3 }}>
                <Box sx={{ width: { xs: 64, md: 80 }, height: { xs: 64, md: 80 }, bgcolor: '#FFFFFF', borderRadius: '16px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  <Image src={item.icon} width={64} height={64} alt={item.title} />
                </Box>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 20, md: 24 }, color: '#1A1A1A', mb: 2 }}>{item.title}</Typography>
                <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, color: '#4A5565' }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;