import { Box, Container, Typography, Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsSection() {
  const news = [
    {
      image: '/news-1.png',
      date: 'Nov 12, 2025',
      title: 'Rangers Secure Crucial Three Points in Away Victory',
      excerpt: 'Dominant performance sees Rangers claim all three points on the road with a commanding display.',
    },
    {
      image: '/news-2.png',
      date: 'Nov 10, 2025',
      title: 'Three Academy Stars Called Up to First Team Squad',
      excerpt: 'Youth development continues to bear fruit as promising talents receive senior call-ups.',
    },
    {
      image: '/news-3.png',
      date: 'Nov 8, 2025',
      title: 'Rangers Women Continue Unbeaten Run',
      excerpt: 'The women\'s team extends their impressive streak with another dominant performance.',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#F9FAFB' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography sx={{
            fontFamily: 'var(--font-bebas-neue)',
            fontSize: '48px',
            color: '#1A1A1A',
          }}>
            LATEST FROM THE CAMP
          </Typography>

          <Link href="/news" style={{ textDecoration: 'none' }}>
            <Typography sx={{
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: '16px',
              color: '#E74C3C',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}>
              VIEW ALL NEWS →
            </Typography>
          </Link>
        </Box>

        <Grid container spacing={4}>
          {news.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{
                width: '100%',
                maxWidth: '365.6px',
                height: '478px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                mx: 'auto',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)' },
              }}>
                <Box sx={{ position: 'relative', width: '100%', height: '256px' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography sx={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    color: '#6A7282',
                    mb: 2,
                  }}>
                    {item.date}
                  </Typography>

                  <Typography sx={{
                    fontFamily: 'var(--font-bebas-neue)',
                    fontSize: '20px',
                    color: '#1A1A1A',
                    mb: 2,
                    lineHeight: 1.3,
                  }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '16px',
                    color: '#4A5565',
                    lineHeight: 1.6,
                  }}>
                    {item.excerpt}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}