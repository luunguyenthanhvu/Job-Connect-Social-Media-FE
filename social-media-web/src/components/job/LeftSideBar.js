import React from 'react';
import Card from '@mui/material/Card';
import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import logo from "../../assets/img/logo-test.jpg";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import ListIcon from '@mui/icons-material/List';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const listItemButtonStyle = {
  '&:hover': {
    backgroundColor: 'white',
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: '#2196f3',
    },
  },
  paddingY: '8px',
};

const LeftSideBar = () => {
  return (
      <Box sx={{paddingRight: '10px', maxWidth: '80%'}}>
        <Card sx={{boxShadow: 3, borderRadius: 2, marginBottom: '10px'}}>
          <CardHeader
              avatar={
                <IconButton color="inherit">
                  <Avatar alt="Vu Luu" src={logo}/>
                </IconButton>
              }
              title="Luu Nguyen Thanh Vu"
              subheader="08/11/2003"
          />
          <CardContent sx={{paddingTop: '0px'}}>
            <Typography variant="body2" color="text.secondary">
              Student At Nong Lam University.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Address:</strong> 123 Main St, City, Country
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{boxShadow: 3, borderRadius: 2, marginBottom: '10px'}}>
          <CardContent>
            <List sx={{padding: '2px'}}>

              <ListItem disablePadding>
                <ListItemButton sx={listItemButtonStyle}>
                  <ListItemIcon>
                    <BookmarksIcon/>
                  </ListItemIcon>
                  <ListItemText primary="My jobs"/>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={listItemButtonStyle}>
                  <ListItemIcon>
                    <ListIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Preferences"/>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={listItemButtonStyle}>
                  <ListItemIcon>
                    <StickyNote2Icon/>
                  </ListItemIcon>
                  <ListItemText primary="Interview prep"/>
                </ListItemButton>
              </ListItem>

            </List>
          </CardContent>
        </Card>
      </Box>
  );
};

export default LeftSideBar;
