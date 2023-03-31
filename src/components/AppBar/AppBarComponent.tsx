import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const AppBarComponent: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuContent = (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Expandable Item" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="/articles" passHref>
            <ListItem button>
              <ListItemText primary="Article 1" />
            </ListItem>
          </Link>
          <Link href="/articles" passHref>
            <ListItem button>
              <ListItemText primary="Article 2" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      {/* Add more ListItems here */}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          {!isDesktop && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: '#000' }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000', fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
            Logo
          </Typography>
          {isDesktop && (
            <div>
              <ListItem button onClick={handleMenuOpen} sx={{ color: '#000' }}>
                <ListItemText primary="Expandable Item" />
                {anchorEl ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose=            {handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {menuContent}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
      {!isDesktop && (
        <nav>
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {menuContent}
          </Drawer>
        </nav>
      )}
      <Container maxWidth="lg">
  <Box sx={{ my: 4 }}>
    <Typography variant="h2" component="h1" gutterBottom>
      Welcome to Your Website
    </Typography>
    <Typography variant="body1" component="p" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Link href="/learn-more" passHref>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Link>
    </Box>
  </Box>
</Container>

    </Box>
);
};

export default AppBarComponent;    
