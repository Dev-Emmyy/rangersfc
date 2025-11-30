'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FixturesSection() {
  const [countdown, setCountdown] = useState({ days: 41, hours: 22, minutes: 19, seconds: 18 });

  const fixtures = [
    {
      competition: 'NPFL',
      homeTeam: 'RANGERS',
      homeLogo: '/rangers-logo.png',
      awayTeam: 'ENYIMBA',
      awayLogo: '/eyinba-logo.png',
      date: 'Sun, Nov 17',
      time: '4:00 PM',
      venue: 'Nnamdi Azikiwe Stadium',
      isHome: true,
    },
    {
      competition: 'Federation Cup',
      homeTeam: 'RANGERS',
      homeLogo: '/rangers-logo.png',
      awayTeam: 'PLATEAU',
      awayLogo: '/platea-logo.png',
      date: 'Wed, Nov 20',
      time: '5:30 PM',
      venue: 'Away',
      isHome: false,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#E74C3C' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography sx={{
          fontFamily: 'var(--font-bebas-neue)',
          fontSize: { xs: '32px', sm: '40px', md: '48px' },
          color: '#1A1A1A',
          mb: { xs: 4, md: 6 },
        }}>
          NEXT FIXTURES
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              p: { xs: 3, md: 4 },
              width: { xs: 340, md: 603 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            }}>
              <Box>
                <Typography sx={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: { xs: '13px', md: '14px' },
                  color: '#FFFFFF',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <CalendarTodayIcon sx={{ fontSize: 16 }} />
                  Upcoming Fixtures
                </Typography>

                <Typography sx={{
                  fontFamily: 'var(--font-bebas-neue)',
                  fontSize: { xs: '36px', sm: '48px', md: '72px' },
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  mb: 3,
                }}>
                  RANGERS VS <br/>ENYIMBA
                </Typography>

                <Button sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#02270E',
                  width: { xs: '130px', md: '154px' },
                  height: { xs: '38px', md: '43px' },
                  borderRadius: '8px',
                  fontFamily: 'var(--font-bebas-neue)',
                  fontSize: { xs: '13px', md: '14px' },
                  '&:hover': { backgroundColor: '#f0f0f0' },
                }}>
                  BUY TICKET
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              p: { xs: 3, md: 4 },
              width: { xs: 340, md: 550 },
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                pointerEvents: 'none',
              },
            }}>
              <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
                {[
                  { value: countdown.days, label: 'Days' },
                  { value: countdown.hours, label: 'Hours' },
                  { value: countdown.minutes, label: 'Minutes' },
                  { value: countdown.seconds, label: 'Seconds' },
                ].map((item, index) => (
                  <Grid item key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography sx={{
                        fontFamily: 'var(--font-bebas-neue)',
                        fontSize: { xs: '40px', sm: '56px', md: '78px' },
                        color: '#FFFFFF',
                        lineHeight: 1,
                      }}>
                        {item.value}
                      </Typography>
                      <Typography sx={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: { xs: '12px', md: '14px' },
                        color: '#FFFFFF',
                        mt: 1,
                      }}>
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: { xs: 2, md: 4 } }}>
          {fixtures.map((fixture, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                p: { xs: 3, md: 4 },
                width: { xs: 340, md: 580 },
                height: { xs: 'auto', md: 340 },
                mx: 'auto',
              }}>
                <Typography sx={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: { xs: '13px', md: '14px' },
                  color: '#6A7282',
                  mb: 3,
                }}>
                  {fixture.competition}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{
                      fontFamily: 'var(--font-bebas-neue)',
                      fontSize: { xs: '18px', sm: '20px', md: '24px' },
                      color: '#1A1A1A',
                      mb: 2,
                    }}>
                      {fixture.homeTeam}
                    </Typography>
                    <Box sx={{ position: 'relative', width: { xs: 48, md: 64 }, height: { xs: 48, md: 64 }, mx: 'auto' }}>
                      <Image src={fixture.homeLogo} alt={fixture.homeTeam} fill style={{ objectFit: 'contain' }} />
                    </Box>
                  </Box>

                  <Typography sx={{
                    fontFamily: 'var(--font-bebas-neue)',
                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                    color: '#1A1A1A',
                    mx: { xs: 2, md: 3 },
                  }}>
                    VS
                  </Typography>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{
                      fontFamily: 'var(--font-bebas-neue)',
                      fontSize: { xs: '18px', sm: '20px', md: '24px' },
                      color: '#1A1A1A',
                      mb: 2,
                    }}>
                      {fixture.awayTeam}
                    </Typography>
                    <Box sx={{ position: 'relative', width: { xs: 48, md: 64 }, height: { xs: 48, md: 64 }, mx: 'auto' }}>
                      <Image src={fixture.awayLogo} alt={fixture.awayTeam} fill style={{ objectFit: 'contain' }} />
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mb: 3, gap: { xs: 1, sm: 0 } }}>
                  <Typography sx={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: { xs: '13px', md: '14px' },
                    color: '#1A1A1A',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}>
                    <CalendarTodayIcon sx={{ fontSize: 16, color: "#E74C3C" }} />
                    {fixture.date} • {fixture.time}
                  </Typography>

                  <Typography sx={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: { xs: '13px', md: '14px' },
                    color: '#1A1A1A',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}>
                    <LocationOnIcon sx={{ fontSize: 16, color: "#E74C3C" }} />
                    {fixture.venue}
                  </Typography>
                </Box>

                <Button fullWidth sx={{
                  backgroundColor: '#E74C3C',
                  color: '#FFFFFF',
                  height: { xs: '44px', md: '48px' },
                  borderRadius: '10px',
                  fontFamily: 'var(--font-bebas-neue)',
                  fontSize: { xs: '14px', md: '16px' },
                  '&:hover': { backgroundColor: '#d43f2f' },
                }}>
                  BUY TICKETS
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}