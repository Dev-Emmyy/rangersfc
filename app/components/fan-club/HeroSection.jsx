import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

const HeroSection = () => {
  const tiers = [
    { icon: '/trophy-bronze.png', bgColor: 'rgba(205, 127, 50, 0.125)', title: 'BRONZE', price: '₦5,000/year', benefits: ['Basic benefits', 'Weekly quiz entries', 'Voting rights', 'Exclusive newsletter'], button: 'CHOOSE BRONZE' },
    { icon: '/trophy-silver.png', bgColor: 'rgba(192, 192, 192, 0.125)', title: 'SILVER', price: '₦12,000/year', benefits: ['All Bronze benefits', 'Merchandise discounts', '2 free match tickets', 'Priority customer support'], button: 'CHOOSE SILVER' },
    { icon: '/trophy-gold.png', bgColor: 'rgba(231, 76, 60, 0.125)', title: 'GOLD', price: '₦25,000/year', benefits: ['All Silver benefits', 'VIP experiences', 'Signed merchandise', 'Meet and greet opportunities'], button: 'CHOOSE GOLD' }
  ];

  return (
    <>
      <Box sx={{ background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)', py: { xs: 6, md: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: { xs: 300, md: 400 }, px: 2 }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 48, sm: 64, md: 96 }, color: '#FFFFFF', textAlign: 'center' }}>JOIN THE RANGERS FAMILY</Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 24, sm: 32, md: 40 }, color: '#FFFFFF', textAlign: 'center', mt: 2 }}>More Than Fans. We&apos;re Rangers.</Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 18 }, color: '#FFFFFF', textAlign: 'center', mt: 1 }}>Exclusive Content, Weekly Prizes, and Your Voice Matters</Typography>
      </Box>
      <Box sx={{ py: { xs: 6, md: 8 }, px: 2 }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, color: '#1A1A1A', textAlign: 'center', mb: { xs: 4, md: 6 } }}>MEMBERSHIP TIERS</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
          {tiers.map((t, i) => (
            <Box key={i} sx={{ width: '100%', maxWidth: 365.6, height: 'auto', minHeight: { xs: 440, md: 469.59 }, bgcolor: '#FFFFFF', borderRadius: '10px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ width: { xs: 64, md: 80 }, height: { xs: 64, md: 80 }, bgcolor: t.bgColor, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Image src={t.icon} width={40} height={40} alt={t.title} />
              </Box>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 28, md: 32 }, color: '#1A1A1A', mb: 1 }}>{t.title}</Typography>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 20, md: 24 }, color: '#1A1A1A', mb: 3 }}>{t.price}</Typography>
              <Box sx={{ width: '100%', mb: 3 }}>
                {t.benefits.map((b, j) => (
                  <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <StarBorderIcon sx={{ width: 18, height: 18, color: '#E74C3C' }} />
                    <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 15, md: 16 }, color: '#4A5565' }}>{b}</Typography>
                  </Box>
                ))}
              </Box>
              <Button sx={{ bgcolor: '#E74C3C', width: '100%', maxWidth: 301.6, height: 48, borderRadius: '10px', mt: 'auto', '&:hover': { bgcolor: '#C0392B' } }}>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#FFFFFF' }}>{t.button}</Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', px: 2, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ width: '100%', maxWidth: 1024, boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', borderRadius: '10px', overflow: 'hidden' }}>
          <Box sx={{ bgcolor: '#E74C3C', p: { xs: 3, md: 4 } }}>
            <Box sx={{ width: { xs: 64, md: 86.4 }, height: { xs: 64, md: 86.4 }, bgcolor: '#FFFFFF', borderRadius: '16px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, mx: { xs: 'auto', md: 0 } }}>
              <Image src="/gamepad-icon.png" width={48} height={48} alt="Quiz" />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, sm: 40, md: 48 }, color: '#FFFFFF' }}>THIS WEEK&apos;S QUIZ</Typography>
              <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 16, md: 20 }, color: '#FFFFFF' }}>Rangers Legends: How Well Do You Know Them?</Typography>
            </Box>
          </Box>
          <Box sx={{ bgcolor: '#FFFFFF', p: { xs: 3, md: 4 } }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3,1fr)' }, gap: 3, mb: 4 }}>
              {[
                { src: "/gift.png", label: "PRIZE", value: "2 VIP Tickets + Jersey" },
                { src: "/time.png", label: "TIME LEFT", value: "3 Days, 14 Hours" },
                { src: "/per.png", label: "PARTICIPANTS", value: "1,247" }
              ].map((s, i) => (
                <Box key={i} sx={{ p: 3, bgcolor: '#F9FAFB', borderRadius: 2, boxShadow: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Image src={s.src} width={32} height={32} alt={s.label} />
                  <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: '#4A5565', mt: 1 }}>{s.label}</Typography>
                  <Typography sx={{ fontSize: { xs: 16, md: 18 }, fontFamily: 'Bebas Neue' }}>{s.value}</Typography>
                </Box>
              ))}
            </Box>
            <Button sx={{ bgcolor: '#E74C3C', width: '100%', height: { xs: 52, md: 60.8 }, borderRadius: '10px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', '&:hover': { bgcolor: '#C0392B' } }}>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 16, md: 19.2 }, color: '#FFFFFF' }}>TAKE THIS WEEK&apos;S QUIZ</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;