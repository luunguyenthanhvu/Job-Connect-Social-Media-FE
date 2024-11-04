import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Toolbar
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../assets/img/logo-test.jpg";
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
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
    color: '#0077B5', // Màu cho các biểu tượng
  },
};

const Navbar = () => {
  return (
      <AppBar position='fixed' sx={{ backgroundColor: '#fff', color: '#333' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          {/* Left site */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" href="#home" title="Home">
              <Avatar alt="Vu Luu" src={logo} />
            </IconButton>

            <Box style={styles.search}>
              <SearchIcon />
              <InputBase
                  placeholder="Searching..."
                  style={styles.input}
              />
            </Box>
          </Box>

          {/* Center site */}
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <IconButton color="inherit" href="#home" title="Home">
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" href="#profile" title="Profile">
              <GroupIcon />
            </IconButton>
            <IconButton color="inherit" href="#settings" title="Settings">
              <WorkIcon />
            </IconButton>
          </Box>

          {/* Right site */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <MessageIcon />
            </IconButton>
            <IconButton color="inherit">
              <Avatar alt="Vu Luu" src={logo} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;
