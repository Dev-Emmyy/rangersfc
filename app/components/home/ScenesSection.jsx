import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const ScenesSection = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ bgcolor: 'black', py: { xs: 4, md: 5 }, px: 2, minHeight: { xs: 'auto', md: 919 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 6, md: 10 }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 0 } }}>
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: 'white', letterSpacing: 'wide', textAlign: { xs: 'center', sm: 'left' } }}>
            BEHIND THE SCENES
          </Typography>
          <Button sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 18, md: 24 }, fontWeight: 400, color: '#E74C3C', '&:hover': { opacity: 0.8 }, textTransform: 'none' }}>
            WATCH MORE →
          </Button>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 1162, height: { xs: 300, sm: 450, md: 652.95 }, bgcolor: '#1E2939', backgroundImage: 'url(https://ik.imagekit.io/4bvbtnlkl/Container.png)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 2, overflow: 'hidden', position: 'relative', cursor: 'pointer', mx: 'auto', '&:hover .play-btn': { transform: 'scale(1.1)' } }}>
          <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box className="play-btn" sx={{ width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, bgcolor: '#E74C3C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s' }}>
              <Box sx={{ width: 0, height: 0, borderLeft: { xs: '15px solid white', md: '20px solid white' }, borderTop: { xs: '9px solid transparent', md: '12px solid transparent' }, borderBottom: { xs: '9px solid transparent', md: '12px solid transparent' }, ml: 0.5 }} />
            </Box>
          </Box>
        </Box>
      </Container>

      <Box sx={{ bgcolor: '#FFFFFF', py: { xs: 6, md: 8 }, px: { xs: 3, md: 4 }, textAlign: 'center' }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: '#1A1A1A', mb: 3 }}>
          MORE THAN JUST FOOTBALL
        </Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, fontWeight: 400, color: '#4A5565', mb: 4, maxWidth: 800, mx: 'auto', px: { xs: 2, md: 0 } }}>
          At Rangers International, we believe in giving back. Through the Rangers Foundation, we&apos;re changing lives, building futures, and strengthening communities across Enugu State.
        </Typography>
        <Button sx={{ bgcolor: '#E74C3C', color: '#FFFFFF', fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, fontWeight: 400, width: { xs: '90%', sm: 253.91 }, maxWidth: 253.91, height: 56, borderRadius: '10px', textTransform: 'none', '&:hover': { bgcolor: '#d43f2f' } }}>
          LEARN ABOUT OUR FOUNDATION →
        </Button>
      </Box>

      <Box sx={{ background: 'linear-gradient(180deg, #E74C3C 0%, #C0392B 100%)', py: { xs: 6, md: 8 }, px: { xs: 3, md: 4 }, textAlign: 'center' }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, fontWeight: 400, color: '#FFFFFF', mb: 2 }}>
          THIS WEEK&apos;S FAN CHALLENGE
        </Typography>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, fontWeight: 400, color: '#FFFFFF', mb: 2, px: { xs: 2, md: 0 } }}>
          WEEKLY QUIZ LIVE NOW!
        </Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, fontWeight: 400, color: '#FFFFFF', mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
          Answer trivia questions and win a signed jersey + 2 VIP tickets
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 4, sm: 6, md: 8 }, mb: 4, flexWrap: 'wrap' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 28, sm: 32, md: 36 }, fontWeight: 400, color: '#FFFFFF' }}>
              4
            </Typography>
            <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, sm: 18, md: 20 }, fontWeight: 400, color: 'rgba(255, 255, 255, 0.8)' }}>
              Days Left
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 28, sm: 32, md: 36 }, fontWeight: 400, color: '#FFFFFF' }}>
              1,847
            </Typography>
            <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, sm: 18, md: 20 }, fontWeight: 400, color: 'rgba(255, 255, 255, 0.8)' }}>
              Participants
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', px: { xs: 2, md: 0 } }}>
          <Button sx={{ bgcolor: '#FFFFFF', color: '#E74C3C', fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, fontWeight: 400, width: { xs: '100%', sm: 143.51 }, maxWidth: 200, height: { xs: 50, md: 59.2 }, borderRadius: '10px', textTransform: 'none', '&:hover': { bgcolor: '#f5f5f5' } }}>
            TAKE THE QUIZ
          </Button>
          <Button sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, fontWeight: 400, width: { xs: '100%', sm: 143.51 }, maxWidth: 200, height: { xs: 50, md: 59.2 }, borderRadius: '10px', border: '1.6px solid #FFFFFF', textTransform: 'none', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' } }}>
            JOIN FAN CLUB
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ScenesSection;