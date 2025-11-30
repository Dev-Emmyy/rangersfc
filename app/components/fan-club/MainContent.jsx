import React from 'react';
import { Box, Typography, Button, LinearProgress } from '@mui/material';
import Image from 'next/image';

const MainContent = () => {
  const players = [
    { name: 'Kenechukwu Agu', position: 'Striker', stats: '5 Goals, 2 Assists', votes: 8234, percentage: 33.5 },
    { name: 'Chidera Ezeh', position: 'Midfielder', stats: '3 Assists, 89% pass accuracy', votes: 6891, percentage: 28.0 },
    { name: 'Nnanna Egbo', position: 'Defender', stats: '3 Clean sheets, 45 clearances', votes: 5123, percentage: 20.9 },
    { name: 'Emmanuel Ani', position: 'Goalkeeper', stats: '2 Clean sheets, 18 saves', votes: 4319, percentage: 17.6 }
  ];

  const winners = [
    { name: 'Godwin Aguda', position: 'Midfielder', month: 'October 2025' },
    { name: 'Ugochukwu Ugwuoke', position: 'Striker', month: 'September 2025' },
    { name: 'Ifeanyi Nweke', position: 'Defender', month: 'August 2025' }
  ];

  const benefits = [
    { icon: <Image src="/trophy.png" width={32} height={32} alt="Trophy" />, title: 'PRIORITY ACCESS', desc: 'Early ticket sales and exclusive events' },
    { icon: <Image src="/gif.png" width={32} height={32} alt="Gift" />, title: 'WEEKLY PRIZES', desc: 'Win tickets, jerseys, and VIP experiences' },
    { icon: <Image src="/gamepad-icon.png" width={32} height={32} alt="Game_Pad" />, title: 'INTERACTIVE', desc: 'Quizzes, voting, and fantasy leagues' },
    { icon: <Image src="/pride.png" width={32} height={32} alt="Pride" />, title: 'RECOGNITION', desc: 'Fan of the Month and loyalty rewards' }
  ];

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)', py: { xs: 4, md: 8 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: 2 }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 28, md: 48 }, color: '#1A1A1A', mb: 1 }}>VOTE FOR YOUR PLAYER OF THE MONTH</Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 14, md: 18 }, color: '#4A5565', mb: 0.5 }}>November 2025 - Voting Period: Nov 1-30</Typography>
        <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 12, md: 14 }, color: '#6A7282' }}>Total Votes: 24,567</Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: 3, maxWidth: 1200, mx: 'auto', px: 2, mb: { xs: 6, md: 8 } }}>
        {players.map((p, i) => (
          <Box key={i} sx={{ bgcolor: '#FFFFFF', width: { xs: '100%', lg: 568.4 }, height: { xs: 'auto', lg: 280 }, boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1)', borderRadius: '10px', p: 3, display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 20, md: 24 }, color: '#1A1A1A' }}>{p.name}</Typography>
                  <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#4A5565', mb: 0.5 }}>{p.position}</Typography>
                  <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 12, md: 14 }, color: '#6A7282', mb: 2 }}>{p.stats}</Typography>
                </Box>
                <Box sx={{ bgcolor: '#E5E7EB', width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, borderRadius: '50%', flexShrink: 0 }} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 12, md: 14 }, color: '#4A5565', mb: 1 }}>Current Votes</Typography>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 12, md: 14 }, color: '#1A1A1A' }}>{p.votes.toLocaleString()} ({p.percentage}%)</Typography>
              </Box>
              <Box sx={{ width: '100%', height: 12, bgcolor: '#E5E7EB', borderRadius: '10px', overflow: 'hidden', mb: 2 }}>
                <Box sx={{ width: `${p.percentage}%`, height: '100%', bgcolor: '#E74C3C' }} />
              </Box>
              <Button sx={{ bgcolor: '#E74C3C', width: '100%', height: 48, borderRadius: '10px', '&:hover': { bgcolor: '#C0392B' } }}>
                <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: 16, color: '#FFFFFF' }}>VOTE NOW</Typography>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 24, md: 32 }, color: '#1A1A1A', textAlign: 'center', mb: 4, px: 2 }}>PREVIOUS WINNERS</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', px: 2, mb: { xs: 6, md: 10 } }}>
        {winners.map((w, i) => (
          <Box key={i} sx={{ width: { xs: '100%', sm: 370.93 }, height: { xs: 'auto', sm: 183.6 }, p: 3, textAlign: 'center', borderRadius: '10px', border: '1px solid #E5E7EB', background: 'linear-gradient(180deg,#F9FAFB,#FFF)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src="/success.png" width={40} height={40} alt="success" />
            <Typography sx={{ fontSize: 20, fontFamily: 'Bebas Neue', mt: 1 }}>{w.name}</Typography>
            <Typography sx={{ fontSize: 16, color: '#4A5565' }}>{w.position}</Typography>
            <Typography sx={{ fontSize: 14, color: '#6A7282' }}>{w.month}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)', py: { xs: 6, md: 8 }, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: { xs: '100%', lg: 1192.8 }, minHeight: { xs: 'auto', lg: 640.28 }, px: 2 }}>
          <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, md: 48 }, color: '#FFFFFF', textAlign: 'center', mb: 4 }}>FAN OF THE MONTH</Typography>
          <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', width: { xs: '100%', md: 896 }, height: { xs: 'auto', md: 352.8 }, borderRadius: '10px', p: { xs: 3, md: 4 }, mx: 'auto', mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: { xs: 96, md: 128 }, height: { xs: 96, md: 128 }, bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: '100%', mb: 3 }} />
            <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 24, md: 32 }, color: '#FFFFFF', mb: 1 }}>Chukwudi Okonkwo</Typography>
            <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#FFFFFF', mb: 2 }}>November 2025 Winner</Typography>
            <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: { xs: 14, md: 16 }, color: '#FFFFFF', textAlign: 'center', maxWidth: 750 }}>&quot;Chukwudi has attended every home match this season, travels with the away supporters, and runs a Rangers fan page with over 10,000 followers. Their dedication to spreading Rangers pride is unmatched!&quot;</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button sx={{ bgcolor: '#FFFFFF', width: { xs: '100%', sm: 154.04 }, height: 56, borderRadius: '10px', boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1)', '&:hover': { bgcolor: '#F5F5F5' } }}>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: 20, color: '#E74C3C' }}>NOMINATE A FAN</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: { xs: 32, md: 48 }, color: '#1A1A1A', textAlign: 'center', mb: 6, px: 2 }}>WHY JOIN THE FAN CLUB?</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3, maxWidth: 1200, mx: 'auto', px: 2 }}>
          {benefits.map((b, i) => (
            <Box key={i} sx={{ textAlign: 'center' }}>
              <Box sx={{ width: 64.4, height: 64.4, bgcolor: '#FFFFFF', borderRadius: '16px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>{b.icon}</Box>
              <Typography sx={{ fontFamily: 'Bebas Neue, Arial, sans-serif', fontSize: 20, color: '#1A1A1A', mb: 1 }}>{b.title}</Typography>
              <Typography sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: 16, color: '#4A5565' }}>{b.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;