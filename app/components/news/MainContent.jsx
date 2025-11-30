"use client"
import React, { useState } from 'react';
import { Box, Tabs, Tab, Container, Typography } from '@mui/material';
import Image from 'next/image';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const newsArticles = [
    { image: 'https://ik.imagekit.io/4bvbtnlkl/NewsPage%20(1).png', category: 'MEN', date: 'Nov 12, 2025', title: 'Rangers Secure Crucial Three Points in Away Victory', description: "Dominant performance sees Rangers claim all three points on the road with a commanding display that showcased the team's tactical excellence." },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/NewsPage%20(2).png', category: 'MEN', date: 'Nov 11, 2025', title: "Manager's Preview: Preparing for Sunday's Derby", description: 'Head coach discusses tactics and team preparation ahead of the crucial derby match this weekend.' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/NewsPage%20(3).png', category: 'YOUTH', date: 'Nov 10, 2025', title: 'Three Academy Stars Called Up to First Team Squad', description: 'Youth development continues to bear fruit as three promising talents from the academy receive their senior team call-ups.' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/NewsPage%20(3).png', category: 'WOMEN', date: 'Nov 8, 2025', title: 'Rangers Women Continue Unbeaten Run with Dominant Display', description: "The women's team extends their impressive streak with another commanding performance in the league." },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/NewsPage%20(4).png', category: 'MEN', date: 'Nov 7, 2025', title: 'Training Intensifies Ahead of Cup Semifinal', description: 'Squad works hard on the training ground as preparation ramps up for the crucial cup semifinal clash.' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/ImageWithFallback%20(1).png', category: 'YOUTH', date: 'Nov 6, 2025', title: 'Rangers U-17s Win Regional Championship', description: 'Outstanding performances from our youth team sees them crowned regional champions.' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/NewsPage%20(5).png', category: 'WOMEN', date: 'Nov 5, 2025', title: "Rising Star: Meet Our Women's Team Top Scorer", description: "An exclusive interview with the league's leading goalscorer about her journey and ambitions." },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/NewsPage%20(6).png', category: 'FOUNDATION', date: 'Nov 4, 2025', title: 'Rangers Launch New Community Football Program', description: 'Foundation initiative brings football to underserved communities across Enugu State.' }
  ];

  return (
    <Box sx={{ bgcolor: '#F9FAFB', pb: { xs: 6, md: 8 } }}>
      <Box sx={{ bgcolor: '#FFFFFF', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', maxWidth: 1536, mx: 'auto', mb: { xs: 4, md: 6 }, pl: { xs: 0, md: 4 }, overflowX: 'auto' }}>
        <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} variant="scrollable" scrollButtons="auto" sx={{ '& .MuiTabs-indicator': { backgroundColor: '#E74C3C', height: 4 } }}>
          {['ALL NEWS', "MEN'S TEAM", "WOMEN'S TEAM", 'YOUTH', 'FOUNDATION'].map(tab => <Tab key={tab} label={tab} sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#4A5565', '&.Mui-selected': { color: '#E74C3C' }, minWidth: { xs: 'auto', md: 120 } }} />)}
        </Tabs>
      </Box>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3, justifyItems: 'center' }}>
          {newsArticles.map((a, i) => (
            <Box key={i} sx={{ width: '100%', maxWidth: 365.6, height: 'auto', minHeight: { xs: 500, md: 548 }, bgcolor: '#FFFFFF', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <Box sx={{ position: 'relative', width: '100%', height: { xs: 220, md: 256 } }}>
                <Image src={a.image} alt={a.title} fill style={{ objectFit: 'cover' }} />
                <Box sx={{ position: 'absolute', top: 16, left: 16, bgcolor: '#E74C3C', borderRadius: '4px', px: 2, py: 0.5 }}>
                  <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 12, md: 14 }, color: '#FFFFFF' }}>{a.category}</Typography>
                </Box>
              </Box>
              <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <CalendarTodayIcon sx={{ width: 16, height: 16, color: '#6A7282' }} />
                  <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 13, md: 14 }, color: '#6A7282' }}>{a.date}</Typography>
                </Box>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 18, md: 20 }, color: '#1A1A1A', mb: 2 }}>{a.title}</Typography>
                <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, color: '#4A5565', mb: 2 }}>{a.description}</Typography>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#E74C3C' }}>READ MORE →</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MainContent;