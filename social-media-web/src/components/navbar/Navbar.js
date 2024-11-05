import React, {useState} from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../assets/img/logo-test.jpg";
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import {useLocation} from 'react-router-dom';
import AppLogo from "../icons/AppLogo"

const styles = {
  appBar: {
    backgroundColor: '#FFFFFF', // Màu nền trắng cho navbar
    boxShadow: 'none',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '0 10px',
    marginRight: '16px',
    flexGrow: 1,
  },
  input: {
    marginLeft: '8px',
    flex: 1,
  },
  iconButton: {
    color: '#0077B5',
  },
  hoverMenuItem: {
    '&:hover': {
      backgroundColor: 'white',
      color: '#2196f3',
    },
    paddingY: '8px',
  }
};

const Navbar = () => {
  // get the current link
  const location = useLocation();

  // update the icon color for user init page
  const getIconColor = (path) => {
    return location.pathname.startsWith(path) ? '#0077B5' : 'inherit';
  };

  // state user menu profile
  const [userMenu, setUserMenu] = useState(null);

  // handle function open menu
  const handleMenuClick = (event) => {
    setUserMenu(userMenu ? null : event.currentTarget);
  };

  return (
      <AppBar position='fixed'
              sx={{backgroundColor: '#fff', color: '#333', height: '70px'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          {/* Left site */}
          <Box sx={{display: 'flex', alignItems: 'center', width: '25%'}}>
            <IconButton color="inherit" href="/home" title="Home">
              <AppLogo
                  width={60}
                  height={60}
              />
            </IconButton>

            <Box style={styles.search}>
              <SearchIcon/>
              <InputBase
                  placeholder="Search"
                  style={styles.input}
              />
            </Box>
          </Box>

          {/* Center site */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            width: '50%'
          }}>
            <IconButton color="inherit" href="/home" title="Home">
              <HomeIcon sx={{color: getIconColor('/home')}}/>
            </IconButton>
            <IconButton color="inherit" href="/friends" title="Friend">
              <GroupIcon sx={{color: getIconColor('/friend')}}/>
            </IconButton>
            <IconButton color="inherit" href="/company" title="Settings">
              <BusinessIcon sx={{color: getIconColor('/company')}}/>
            </IconButton>
            <IconButton color="inherit" href="/jobs" title="Settings">
              <WorkIcon sx={{color: getIconColor('/job')}}/>
            </IconButton>

          </Box>

          {/*Right site*/}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '5px',
            width: '25%'
          }}>
            <IconButton color="inherit">
              <Badge sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#ff5722', color: '#fff',
                },
              }} badgeContent={100} max={99}>
                <NotificationsIcon/>
              </Badge>
            </IconButton>

            <IconButton color="inherit">
              <Badge sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#2196f3', color: '#fff',
                },
              }} badgeContent={100} max={99}>
                <MessageIcon/>
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={handleMenuClick}>
              <Avatar alt="Vu Luu" src={logo}/>
            </IconButton>

            <Menu
                anchorEl={userMenu}
                open={Boolean(userMenu)}
                onClose={handleMenuClick}
                anchorOrigin={{
                  vertical: 'bottom', horizontal: 'right'
                }}

                transformOrigin={{
                  vertical: 'top', horizontal: 'right'
                }}
            >
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                p: '10px 20px'
              }}>
                <Avatar alt="Vu Luu" src={logo}/>
                <Box>
                  <Typography
                      variant="subtitle1"
                      sx={{wordBreak: 'break-word'}}>Vũ Lưu</Typography>
                  <Typography
                      variant="body2"
                      sx={{wordBreak: 'break-word'}}
                      color="textSecondary">vuluu@example.com</Typography>
                </Box>
              </Box>
              <MenuItem onClick={handleMenuClick}
                        sx={styles.hoverMenuItem}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClick}
                        sx={styles.hoverMenuItem}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClick}
                        sx={styles.hoverMenuItem}>Logout</MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;
