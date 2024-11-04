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
import ConnectWithoutContactIcon
  from '@mui/icons-material/ConnectWithoutContact';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';

const listItemButtonStyle = {
  '&:hover': {
    backgroundColor: 'white',
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: '#2196f3',
    },
  },
  paddingY: '8px',
};

const LeftSidebar = () => {
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
                    <ConnectWithoutContactIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Connection"/>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={listItemButtonStyle}>
                  <ListItemIcon>
                    <BookmarksIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Saved items"/>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={listItemButtonStyle}>
                  <ListItemIcon>
                    <GroupsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Group"/>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={listItemButtonStyle}>
                  <ListItemIcon>
                    <EventIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Event"/>
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
  );
};

export default LeftSidebar;
