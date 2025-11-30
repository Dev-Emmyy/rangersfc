import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const HeroSection = () => {
  return (
    <>
      <Box sx={{ bgcolor: '#000000', py: { xs: 6, md: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: { xs: 200, md: 300 }, px: 2 }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 48, sm: 64, md: 96 }, color: '#FFFFFF', textAlign: 'center' }}>RANGERS MEDIA HUB</Typography>
        <Typography sx={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: { xs: 16, md: 20 }, color: '#FFFFFF', textAlign: 'center' }}>Watch exclusive content from Rangers International FC</Typography>
      </Box>
      <Box sx={{ bgcolor: '#F9FAFB', py: { xs: 6, md: 8 }, display: 'flex', justifyContent: 'center', px: { xs: 2, md: 0 } }}>
        <Box sx={{ maxWidth: 1200, width: '100%' }}>
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#1A1A1A', mb: 3 }}>FEATURED VIDEO</Typography>
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 1160.8, height: { xs: 250, sm: 400, md: 652.95 }, borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', mx: 'auto' }}>
            <Image src="https://ik.imagekit.io/4bvbtnlkl/Container%20(1).png" alt="Featured Video" fill style={{ objectFit: 'cover' }} />
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: 64, md: 96 }, height: { xs: 64, md: 96 }, bgcolor: '#E74C3C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <PlayArrowIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#FFFFFF' }} />
            </Box>
            <Box sx={{ position: 'absolute', bottom: { xs: 16, md: 24 }, left: { xs: 16, md: 24 }, display: 'flex', flexDirection: 'column', gap: 2, zIndex: 2, right: { xs: 16, md: 'auto' } }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box sx={{ bgcolor: '#E74C3C', width: { xs: 65, md: 73.09 }, height: { xs: 24, md: 28 }, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 12, md: 14 }, color: '#FFFFFF' }}>HIGHLIGHTS</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <AccessTimeIcon sx={{ fontSize: 16, color: '#FFFFFF' }} />
                  <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 13, md: 14 }, color: '#FFFFFF' }}>12:45</Typography>
                </Box>
              </Box>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 18, sm: 20, md: 24 }, color: '#FFFFFF' }}>Extended Highlights: Rangers 3-1 Plateau United</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;