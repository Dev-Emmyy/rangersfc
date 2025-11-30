'use client';

import { AppBar, Toolbar, Container, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'NEWS', href: '/news' },
  { label: 'FOUNDATION', href: '/foundation' },
  { label: 'MEDIA', href: '/media' },
  { label: 'SHOP', href: '/shop' },
  { label: 'FAN CLUB', href: '/fan-club' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: '60px', md: '70px' }, display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/">
                <Image src="/logo.png" alt="Rangers International F.C. Enugu" width={187} height={44} priority style={{ width: 'auto', height: '32px', maxWidth: '140px' }} />
              </Link>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                  <Box sx={{
                    mt: 1,
                    color: isActive(item.href) ? '#E74C3C' : '#364153',
                    fontFamily: 'var(--font-bebas-neue)',
                    fontSize: '15.2px',
                    pb: 0.5,
                    borderBottom: isActive(item.href) ? '3px solid #E74C3C' : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': { color: '#E74C3C' },
                  }}>
                    {item.label}
                  </Box>
                </Link>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 }, alignItems: 'center' }}>
              <IconButton sx={{ color: '#364153', display: { xs: 'inline-flex', md: 'inline-flex' } }}>
                <ShoppingCartOutlinedIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>

              <IconButton sx={{ color: '#364153', display: { xs: 'inline-flex', md: 'inline-flex' } }}>
                <PersonOutlineIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
              </IconButton>

              <IconButton onClick={() => setMobileOpen(!mobileOpen)} sx={{ display: { md: 'none' }, color: '#364153' }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { width: 280 } }}>
        <Box onClick={() => setMobileOpen(false)} sx={{ pt: 3 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={Link} href={item.href} sx={{ py: 2, color: isActive(item.href) ? '#E74C3C' : '#364153', borderLeft: isActive(item.href) ? '3px solid #E74C3C' : '3px solid transparent' }}>
                  <ListItemText primary={item.label} sx={{ '& .MuiTypography-root': { fontFamily: 'var(--font-bebas-neue)', fontSize: '16px' } }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}