import React from 'react';
import { Box, Container, Typography, TextField, Button, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#000000', color: '#FFFFFF' }}>
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '432px 200px 200px 200px' }, gap: 6, justifyContent: 'space-between' }}>
          <Box sx={{ maxWidth: 432.31 }}>
            <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: 16, fontWeight: 400, color: '#99A1AF', lineHeight: 2 }}>
              Rangers International Football Club<br />
              Nnamdi Azikiwe Stadium<br />
              Enugu, Enugu State, Nigeria
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              {[FacebookIcon, TwitterIcon, InstagramIcon, YouTubeIcon, MusicNoteIcon].map((Icon, i) => (
                <IconButton key={i} sx={{ width: 40, height: 40, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' } }}>
                  <Icon sx={{ fontSize: 20, color: '#FFFFFF' }} />
                </IconButton>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: 24, fontWeight: 400, mb: 2 }}>QUICK LINKS</Typography>
            {['About Us', 'News', 'Shop', 'Tickets', 'Contact Us'].map((link, i) => (
              <Link key={i} href="#" sx={{ display: 'block', fontFamily: 'Inter, Arial, sans-serif', fontSize: 16, fontWeight: 500, color: '#99A1AF', textDecoration: 'none', my: 1.5, '&:hover': { color: '#FFFFFF' } }}>{link}</Link>
            ))}
          </Box>
          <Box>
            <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: 24, fontWeight: 400, mb: 2 }}>TEAMS</Typography>
            {['Men\'s First Team', 'Women\'s Team', 'Academy'].map((team, i) => (
              <Link key={i} href="#" sx={{ display: 'block', fontFamily: 'Inter, Arial, sans-serif', fontSize: 16, fontWeight: 500, color: '#99A1AF', textDecoration: 'none', my: 1.5, '&:hover': { color: '#FFFFFF' } }}>{team}</Link>
            ))}
          </Box>
          <Box>
            <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: 16, fontWeight: 400, mb: 1 }}>NEWSLETTER</Typography>
            <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: 16, fontWeight: 500, color: '#99A1AF', mb: 2 }}>Stay updated with<br />Rangers news</Typography>
            <TextField placeholder="Your email" type="email" sx={{ width: 200.15, mb: 1.5, '& .MuiOutlinedInput-root': { height: 40, bgcolor: 'rgba(255, 255, 255, 0.1)', fontFamily: 'Inter, Arial, sans-serif', fontSize: 16, fontWeight: 500, color: '#6A7282', '&:hover fieldset': { border: '0.8px solid #FFFFFF' }, '&.Mui-focused fieldset': { border: '0.8px solid #FFFFFF' } }, '& input': { color: '#FFFFFF' } }} />
            <Button sx={{ width: 200.15, height: 40, bgcolor: '#E74C3C', color: '#FFFFFF', fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: 16, fontWeight: 400, textTransform: 'none', '&:hover': { bgcolor: '#d43f2f' } }}>SUBSCRIBE</Button>
          </Box>
        </Box>
      </Container>
      <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Container maxWidth="xl" sx={{ py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: 14, fontWeight: 400, color: '#99A1AF' }}>© 2025 Rangers International Football Club. All rights reserved.</Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((link, i) => (
              <Link key={i} href="#" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: 14, fontWeight: 400, color: '#99A1AF', textDecoration: 'none', '&:hover': { color: '#FFFFFF' } }}>{link}</Link>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;