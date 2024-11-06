import React from 'react';
import {
  Avatar,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const NotificationItem = () => (
    <>
      <ListItem
          alignItems="flex-start"
          sx={{
            padding: "10px 20px",
          }}
          secondaryAction={
            <IconButton edge="end">
              <BookmarksIcon sx={{color: '#0077B5'}}/>
            </IconButton>
          }
      >
        <ListItemAvatar>
          <Avatar alt='notification name' src=""/>
        </ListItemAvatar>
        <ListItemText
            primary={
              <Link variant="subtitle1"
                    sx={{
                      fontWeight: 'bold',
                      color: '#0077B5',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        textDecorationColor: '#0077B5',
                      }
                    }}>
                name
              </Link>
            }
            secondary={
              <>
                <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      display: 'block',
                      marginBottom: '4px'
                    }}
                >
                  name
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                >
                  address
                </Typography>
              </>
            }

        />
      </ListItem>
    </>
);

export default NotificationItem;
