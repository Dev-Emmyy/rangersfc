import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, IconButton, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const products = [
  { badge: 'NEW', badgeBg: '#E74C3C', category: 'KITS', title: '2024/25 HOME KIT', price: '₦25,000', image: 'https://ik.imagekit.io/4bvbtnlkl/Rangers_Kit2_a6a1a23168%201.png' },
  { badge: 'NEW', badgeBg: '#E74C3C', category: 'KITS', title: '2024/25 AWAY KIT', price: '₦25,000', image: 'https://ik.imagekit.io/4bvbtnlkl/Rangers_Kit1_99af664194%201.png?updatedAt=1764514895207' },
  { badge: null, category: 'TRAINING', title: 'TRAINING JERSEY', price: '₦18,000', image: 'https://ik.imagekit.io/4bvbtnlkl/Frame%201000005394.png' },
  { badge: 'POPULAR', badgeBg: '#E74C3C', category: 'CASUAL', title: 'RANGERS PRIDE HOODIE', price: '₦15,000', image: '' },
  { badge: null, category: 'FANZONE', title: 'MATCHDAY SCARF', price: '₦5,000', image: '' },
  { badge: null, category: 'ACCESSORIES', title: 'RANGERS CAP', price: '₦7,000', image: '' },
  { badge: null, category: 'KITS', title: "WOMEN'S HOME KIT", price: '₦23,000', image: '' },
  { badge: null, category: 'TRAINING', title: 'TRAINING PANTS', price: '₦12,000', image: '' },
  { badge: null, category: 'CASUAL', title: 'RANGERS T-SHIRT', price: '₦8,000', image: '' },
  { badge: null, category: 'ACCESSORIES', title: 'RANGERS BACKPACK', price: '₦18,000', image: '' },
  { badge: null, category: 'FANZONE', title: 'STADIUM FLAG', price: '₦6,500', image: '' },
  { badge: null, category: 'CASUAL', title: 'POLO SHIRT', price: '₦10,000', image: '' }
];

export default function MainContent() {
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

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 2, md: 3 }, p: { xs: 2, md: 3 } }}>
        {products.map((product, i) => (
          <Link key={i} href={`/shop/${i}`} style={{ textDecoration: 'none' }}>
            <Box sx={{ bgcolor: '#FFFFFF', width: '100%', height: { xs: 'auto', md: '403px' }, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
              <Box sx={{ bgcolor: '#F3F4F6', height: { xs: '180px', sm: '220px', md: '272.2px' }, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {product.image && <Image src={product.image} alt={product.title} fill style={{ objectFit: 'contain', padding: '20px' }} />}
                {product.badge && (
                  <Box sx={{ position: 'absolute', top: { xs: 8, md: 12 }, left: { xs: 8, md: 12 }, bgcolor: product.badgeBg, width: { xs: '38px', md: '42.86px' }, height: { xs: '24px', md: '28px' }, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <Typography sx={{ color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '12px', md: '14px' } }}>{product.badge}</Typography>
                  </Box>
                )}
              </Box>
              <Box sx={{ p: { xs: 1.5, md: 2 } }}>
                <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: { xs: '10px', md: '12px' }, color: '#6A7282', mb: 0.5 }}>{product.category}</Typography>
                <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: { xs: '14px', md: '17.6px' }, color: '#1A1A1A', mb: 1 }}>{product.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1, sm: 0 } }}>
                  <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: { xs: '16px', md: '20px' }, color: '#1A1A1A', alignSelf: { xs: 'flex-start', sm: 'auto' } }}>{product.price}</Typography>
                  <Button sx={{ bgcolor: '#E74C3C', borderRadius: '10px', height: { xs: '32px', md: '36.4px' }, color: '#FFFFFF', fontFamily: 'Bebas Neue', fontSize: { xs: '11px', md: '13.6px' }, px: { xs: 1.5, md: 2 }, textTransform: 'none', width: { xs: '100%', sm: 'auto' }, '&:hover': { bgcolor: '#E74C3C' } }}>ADD TO CART</Button>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
}