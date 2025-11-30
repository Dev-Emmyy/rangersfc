import { Box, Container, Typography, Button, Grid } from '@mui/material';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Image from 'next/image';

export default function HeroSection() {
  const stats = [
    { icon: <Image src="/trophy.png" width={64.8} height={64.8} alt="Trophy" />, value: '7', label: 'League Titles' },
    { icon: <Image src="/people.png" width={64.8} height={64.8} alt="People" />, value: '50K+', label: 'Fan Club Members' },
    { icon: <Image src="/sports.png" width={64.8} height={64.8} alt="Sports" />, value: '100+', label: 'Youth Players' },
    { icon: <Image src="/heart.png" width={64.8} height={64.8} alt="Heart" />, value: '25+', label: 'Years of Excellence' },
  ];

  return (
    <>
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '600px', md: '775.2px' },
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(255, 255, 255, 1) 100%)',
        }
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', px: { xs: 2, md: 3 } }}>
          <Typography sx={{
            fontFamily: 'var(--font-bebas-neue)',
            fontSize: { xs: '48px', sm: '72px', md: '120px' },
            color: '#FFFFFF',
            mb: 2,
            lineHeight: 1,
          }}>
            NEVER SAY DIE
          </Typography>

          <Typography sx={{
            fontFamily: 'var(--font-inter)',
            fontSize: { xs: '16px', sm: '20px', md: '24px' },
            color: '#FFFFFF',
            mb: 5,
            px: { xs: 2, md: 0 },
          }}>
            Where Legends Are Born and Champions Are Made
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', px: { xs: 2, md: 0 } }}>
            <Button startIcon={<ConfirmationNumberOutlinedIcon />} sx={{
              backgroundColor: '#E74C3C',
              color: '#FFFFFF',
              width: { xs: '140px', md: '161.8px' },
              height: { xs: '50px', md: '59.2px' },
              borderRadius: '10px',
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: { xs: '14px', md: '16px' },
              '&:hover': { backgroundColor: '#d43f2f' },
            }}>
              BUY TICKETS
            </Button>

            <Button startIcon={<SchoolOutlinedIcon />} sx={{
              backgroundColor: '#FFFFFF',
              color: '#1A1A1A',
              width: { xs: '150px', md: '170.85px' },
              height: { xs: '50px', md: '59.2px' },
              borderRadius: '10px',
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: { xs: '14px', md: '16px' },
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}>
              JOIN ACADEMY
            </Button>

            <Button startIcon={<ShoppingBagOutlinedIcon />} sx={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              width: { xs: '180px', md: '204.1px' },
              height: { xs: '50px', md: '59.2px' },
              borderRadius: '10px',
              border: '2px solid #FFFFFF',
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: { xs: '14px', md: '16px' },
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}>
              SHOP MERCHANDISE
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 3 } }}>
        <Typography sx={{
          fontFamily: 'var(--font-bebas-neue)',
          fontSize: { xs: '32px', sm: '40px', md: '48px' },
          color: '#1A1A1A',
          textAlign: 'center',
          mb: 3,
          px: { xs: 2, md: 0 },
        }}>
          WELCOME TO RANGERS INTERNATIONAL FC
        </Typography>

        <Typography sx={{
          fontFamily: 'var(--font-inter)',
          fontSize: { xs: '16px', md: '18px' },
          color: '#4A5565',
          textAlign: 'center',
          maxWidth: '900px',
          mx: 'auto',
          mb: { xs: 6, md: 8 },
          lineHeight: 1.8,
          px: { xs: 2, md: 0 },
        }}>
          Rangers International Football Club stands as one of Nigeria&apos;s most decorated and historic football institutions. From our home at the Nnamdi Azikiwe Stadium, we&apos;ve written countless chapters of glory, inspiring generations of fans across Enugu State and beyond. Whether you&apos;re a lifelong supporter or discovering us for the first time, you&apos;re now part of the Rangers family—a community built on passion, excellence, and unwavering pride.
        </Typography>

        <Grid container spacing={{ xs: 6, md: 15 }} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
                <Box sx={{
                  width: { xs: '64px', md: '80px' },
                  height: { xs: '64px', md: '80px' },
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: { xs: 2, md: 3 },
                }}>
                  {stat.icon}
                </Box>
                
                <Typography sx={{
                  fontFamily: 'var(--font-bebas-neue)',
                  fontSize: { xs: '28px', sm: '32px', md: '40px' },
                  fontWeight: 400,
                  color: '#E74C3C',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                }}>
                  {stat.value}
                </Typography>
                
                <Typography sx={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 400,
                  color: '#4A5565',
                  mt: 1,
                  textAlign: 'center',
                }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}