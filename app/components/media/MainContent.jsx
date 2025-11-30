import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MainContent = () => {
  const videos = [
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage.png', category: 'HIGHLIGHTS', time: '12:45', title: 'Extended Highlights: Rangers 3-1 Plateau United', date: '2 days ago' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage%20(1).png', category: 'INTERVIEWS', time: '8:30', title: 'Press Conference: Manager Previews Weekend Clash', date: '3 days ago' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage%20(2).png', category: 'BEHIND', time: '15:20', title: 'Training Ground: Preparing for the Big Match', date: '5 days ago' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage%20(3).png', category: 'BEHIND', time: '6:15', title: 'Tunnel Cam: Matchday Experience', date: '1 week ago' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage%20(4).png', category: 'ACADEMY', time: '10:00', title: 'Academy Stars: The Next Generation', date: '1 week ago' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage%20(5).png', category: 'HIGHLIGHTS', time: '8:45', title: 'Goal Compilation: Best Goals of the Month', date: '2 weeks ago' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage%20(6).png', category: 'INTERVIEWS', time: '12:00', title: "Player Feature: Captain's Journey to Rangers", date: '2 weeks ago' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage%20(7).png', category: 'BEHIND', time: '18:30', title: 'Day in the Life: Behind the Scenes at Rangers', date: '3 weeks ago' },
    { image: 'https://ik.imagekit.io/4bvbtnlkl/MediaPage%20(8).png', category: 'ACADEMY', time: '14:15', title: 'Youth Tournament: Rangers Academy in Action', date: '3 weeks ago' }
  ];

  return (
    <Box sx={{ bgcolor: '#F9FAFB' }}>
      <Box sx={{ py: { xs: 6, md: 8 }, display: 'flex', justifyContent: 'center', px: { xs: 2, md: 0 } }}>
        <Box sx={{ maxWidth: 1200, width: '100%' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3, justifyItems: 'center' }}>
            {videos.map((video, i) => (
              <Box key={i} sx={{ width: '100%', maxWidth: 370.93, height: 'auto', minHeight: { xs: 300, md: 331.04 }, bgcolor: '#FFFFFF', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', overflow: 'hidden', cursor: 'pointer' }}>
                <Box sx={{ position: 'relative', width: '100%', height: { xs: 180, sm: 200, md: 208.64 } }}>
                  <Image src={video.image} alt={video.title} fill style={{ objectFit: 'cover' }} />
                  <Box sx={{ position: 'absolute', top: 12, right: 12, bgcolor: 'rgba(0, 0, 0, 0.8)', width: { xs: 60, md: 69.63 }, height: { xs: 24, md: 28 }, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <AccessTimeIcon sx={{ fontSize: 14, color: '#FFFFFF' }} />
                    <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 12, md: 14 }, color: '#FFFFFF' }}>{video.time}</Typography>
                  </Box>
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: 48, md: 64 }, height: { xs: 48, md: 64 }, bgcolor: '#E74C3C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PlayArrowIcon sx={{ fontSize: { xs: 20, md: 24 }, color: '#FFFFFF' }} />
                  </Box>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Box sx={{ bgcolor: '#F3F4F6', width: { xs: 50, md: 58.08 }, height: { xs: 20, md: 23.99 }, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                    <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 10, md: 12 }, color: '#364153' }}>{video.category}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, color: '#1A1A1A', mb: 1 }}>{video.title}</Typography>
                  <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 13, md: 14 }, color: '#6A7282' }}>{video.date}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)', py: { xs: 6, md: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, mb: { xs: 6, md: 10 }, px: 2 }}>
        <Image src="/camera-icon.png" width={64} height={64} alt="Camera" />
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#FFFFFF' }}>MATCHDAY PHOTOGRAPHY</Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, color: '#FFFFFF', textAlign: 'center', maxWidth: 600 }}>Explore our collection of stunning matchday photos and behind-the-scenes photography.</Typography>
        <Button sx={{ bgcolor: '#FFFFFF', width: { xs: '90%', sm: 191.23 }, maxWidth: 250, height: { xs: 48, md: 56 }, borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', '&:hover': { bgcolor: '#F5F5F5' } }}>
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#E74C3C' }}>VIEW PHOTO GALLERIES</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default MainContent;