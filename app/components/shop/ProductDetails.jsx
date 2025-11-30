import { Box, Typography, Button, IconButton } from '@mui/material';
import Image from 'next/image';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { products } from './MainContent';

export default function ProductDetails({ productId }) {
  const product = products[productId] || products[0];

  return (
    <>
      <Box sx={{ bgcolor: '#FFFFFF', height: { xs: 'auto', md: '72.8px' }, borderBottom: '1px solid #E5E7EB', boxShadow: '0 1px 2px -1px rgba(0,0,0,0.1)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: { xs: 1.5, md: 2 }, px: { xs: 2, md: 3 }, py: { xs: 2, md: 0 }, overflowX: { xs: 'auto', md: 'visible' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
          <IconButton sx={{ color: '#4A5565', minWidth: 'auto', p: 1, flexShrink: 0 }}>
            <FilterAltIcon sx={{ width: { xs: 18, md: 20 }, height: { xs: 18, md: 20 } }} />
          </IconButton>
          <Button sx={{ bgcolor: '#E74C3C', color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '14px', md: '16px' }, height: { xs: '36px', md: '40px' }, borderRadius: '10px', px: { xs: 2, md: 3 }, textTransform: 'none', flexShrink: 0, '&:hover': { bgcolor: '#E74C3C' } }}>ALL PRODUCTS</Button>
          <Button sx={{ bgcolor: '#F3F4F6', color: '#364153', fontFamily: 'Bebas Neue', fontSize: { xs: '14px', md: '16px' }, height: { xs: '36px', md: '40px' }, borderRadius: '10px', px: { xs: 2, md: 3 }, textTransform: 'none', flexShrink: 0, '&:hover': { bgcolor: '#F3F4F6' } }}>KITS & JERSEYS</Button>
          <Button sx={{ bgcolor: '#F3F4F6', color: '#364153', fontFamily: 'Bebas Neue', fontSize: { xs: '14px', md: '16px' }, height: { xs: '36px', md: '40px' }, borderRadius: '10px', px: { xs: 2, md: 3 }, textTransform: 'none', flexShrink: 0, '&:hover': { bgcolor: '#F3F4F6' } }}>TRAINING WEAR</Button>
          <Button sx={{ bgcolor: '#F3F4F6', color: '#364153', fontFamily: 'Bebas Neue', fontSize: { xs: '14px', md: '16px' }, height: { xs: '36px', md: '40px' }, borderRadius: '10px', px: { xs: 2, md: 3 }, textTransform: 'none', flexShrink: 0, '&:hover': { bgcolor: '#F3F4F6' } }}>CASUAL WEAR</Button>
          <Button sx={{ bgcolor: '#F3F4F6', color: '#364153', fontFamily: 'Bebas Neue', fontSize: { xs: '14px', md: '16px' }, height: { xs: '36px', md: '40px' }, borderRadius: '10px', px: { xs: 2, md: 3 }, textTransform: 'none', flexShrink: 0, '&:hover': { bgcolor: '#F3F4F6' } }}>ACCESSORIES</Button>
          <Button sx={{ bgcolor: '#F3F4F6', color: '#364153', fontFamily: 'Bebas Neue', fontSize: { xs: '14px', md: '16px' }, height: { xs: '36px', md: '40px' }, borderRadius: '10px', px: { xs: 2, md: 3 }, textTransform: 'none', flexShrink: 0, '&:hover': { bgcolor: '#F3F4F6' } }}>FAN ZONE</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: { xs: 4, md: 8 }, px: { xs: 2, md: 3 } }}>
        <Box sx={{ width: '100%', maxWidth: '600px', mb: { xs: 3, md: 4 }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          {product.badge && (
            <Box sx={{ bgcolor: product.badgeBg, width: { xs: '50px', md: '57px' }, height: { xs: '24px', md: '28px' }, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '12px', md: '14px' } }}>{product.badge}</Typography>
            </Box>
          )}
          <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: { xs: '18px', md: '24px' }, color: '#1A1A1A', flex: 1, textAlign: 'center' }}>{product.title}</Typography>
          <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: { xs: '18px', md: '24px' }, color: '#1A1A1A' }}>1/3</Typography>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', maxWidth: '600px', height: { xs: '300px', sm: '400px', md: '600px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: 4, md: 6 } }}>
          <Box sx={{ position: 'absolute', left: { xs: -10, md: 0 }, width: { xs: '50px', md: '73px' }, height: { xs: '40px', md: '51px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 1 }}>
            <Image src="/left.png" width={40} height={40} alt="left" style={{ width: 'auto', height: '30px' }} />
          </Box>
          <Box sx={{ width: '100%', height: '100%', position: 'relative', px: { xs: 5, md: 8 } }}>
            {product.image && <Image src={product.image} alt={product.title} fill style={{ objectFit: 'contain' }} />}
          </Box>
          <Box sx={{ position: 'absolute', right: { xs: -10, md: 0 }, width: { xs: '50px', md: '73px' }, height: { xs: '40px', md: '51px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 1 }}>
            <Image src="/right.png" width={40} height={40} alt="right" style={{ width: 'auto', height: '30px' }} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: { xs: 3, md: 10 }, width: '100%', maxWidth: '600px' }}>
          <Typography sx={{ fontFamily: 'Lato', fontSize: { xs: '32px', md: '48px' }, fontWeight: 700, color: '#000000' }}>{product.price}</Typography>
          <Button sx={{ bgcolor: '#E74C3C', height: { xs: '44px', md: '48px' }, color: '#FFFFFF', fontFamily: 'Lato', fontSize: { xs: '18px', md: '24px' }, fontWeight: 700, px: { xs: 3, md: 4 }, textTransform: 'none', width: { xs: '100%', sm: 'auto' }, '&:hover': { bgcolor: '#E74C3C' } }}>ADD TO CART</Button>
        </Box>
      </Box>
    </>
  );
}