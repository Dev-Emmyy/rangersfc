import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function ShopFooter() {
  return (
    <>
      <Box sx={{ bgcolor: '#E74C3C', height: { xs: 'auto', md: '142px' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-around', px: { xs: 2, md: 3 }, py: { xs: 4, md: 0 }, mt: 5, gap: { xs: 3, md: 0 } }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '20px', md: '32px' }, mb: 1 }}>OFFICIAL LICENSED</Typography>
          <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: { xs: '12px', md: '16px' } }}>Every item is officially licensed</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '20px', md: '32px' }, mb: 1 }}>QUALITY GUARANTEED</Typography>
          <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: { xs: '12px', md: '16px' } }}>Premium materials and craftsmanship</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '20px', md: '32px' }, mb: 1 }}>SECURE SHOPPING</Typography>
          <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: { xs: '12px', md: '16px' } }}>Safe and encrypted payment</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '20px', md: '32px' }, mb: 1 }}>EASY RETURNS</Typography>
          <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: { xs: '12px', md: '16px' } }}>Hassle-free 30-day return policy</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: { xs: 3, md: 4 }, py: { xs: 6, md: 8 }, px: { xs: 2, md: 3 } }}>
        <Box sx={{ width: { xs: '120px', md: '200px' }, height: { xs: '120px', md: '200px' }, position: 'relative', display: { xs: 'none', sm: 'block' } }}>
          <Image src="https://ik.imagekit.io/4bvbtnlkl/Rangers_Kit2_a6a1a23168%201.png" alt="Kit Left" fill style={{ objectFit: 'contain' }} />
        </Box>
        <Box sx={{ textAlign: 'center', maxWidth: '600px' }}>
          <Typography sx={{ color: '#E74C3C', fontFamily: 'Bebas Neue', fontSize: { xs: '32px', md: '48px' }, mb: 2 }}>MAKE IT YOURS</Typography>
          <Typography sx={{ color: 'rgba(0,0,0,0.8)', fontFamily: 'Inter', fontSize: { xs: '14px', md: '18px' }, mb: 3, px: { xs: 2, md: 0 } }}>Add player name & number or personalize with your own name</Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', px: { xs: 2, sm: 0 } }}>
            <Box sx={{ bgcolor: '#E74C3C', width: { xs: '100%', sm: '161.88px' }, height: { xs: '90px', sm: '102.59px' }, borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: { xs: '12px', md: '14px' }, mb: 1 }}>PLAYER PRINTING</Typography>
              <Typography sx={{ color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '20px', md: '24px' } }}>₦3,000</Typography>
            </Box>
            <Box sx={{ bgcolor: '#E74C3C', width: { xs: '100%', sm: '161.88px' }, height: { xs: '90px', sm: '102.59px' }, borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: { xs: '12px', md: '14px' }, mb: 1 }}>CUSTOM PRINTING</Typography>
              <Typography sx={{ color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '20px', md: '24px' } }}>₦4,500</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: { xs: '120px', md: '200px' }, height: { xs: '120px', md: '200px' }, position: 'relative', display: { xs: 'none', sm: 'block' } }}>
          <Image src="https://ik.imagekit.io/4bvbtnlkl/Rangers_Kit1_99af664194%201.png?updatedAt=1764514895207" alt="Kit Right" fill style={{ objectFit: 'contain' }} />
        </Box>
      </Box>
    </>
  );
}