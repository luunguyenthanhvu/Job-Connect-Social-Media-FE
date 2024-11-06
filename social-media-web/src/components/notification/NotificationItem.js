import React from 'react';
import {
  Avatar,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NotificationItem = () => (
    <>
      <ListItem
          alignItems="flex-start"
          sx={{
            padding: "10px 20px",
            cursor: "pointer",
            borderBottom: "1px solid #e6e6e6",
            '&:hover': {
              background: '#efeeee'
            },
          }}
          secondaryAction={
            <IconButton aria-label="settings">
              <MoreVertIcon/>
            </IconButton>
          }
      >
        <ListItemIcon
            sx={{
              alignContent: 'center',
              margin: 'auto 0px',
              minWidth: '0px',
            }}>
          <MoreVertIcon/>
        </ListItemIcon>

        <ListItemAvatar>
          <Avatar alt='notification name' src=""/>
        </ListItemAvatar>
        <ListItemText
            primary={
              <Link variant="subtitle1"
                    sx={{
                      cursor: 'pointer',
                      display: 'flex',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        textDecorationColor: '#7b7b7b',
                      }
                    }}>
                <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#0077B5',
                      display: 'span',
                      '&:hover': {
                        textDecoration: 'underline',
                        textDecorationColor: '#7b7b7b',
                      }
                    }}>Vu Luu : </Typography>

                <Typography
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      display: 'span',
                      marginBottom: '4px',
                      marginLeft: '5px',

                    }}> Post new job... I need 4 dev in webapp.....</Typography>
              </Link>
            }
            secondary={
              <>
                <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      display: 'block',
                      fontStyle: 'italic',
                    }}
                >
                  06/11/2024
                </Typography>
              </>
            }

        />
      </ListItem>
    </>
);

export default NotificationItem;
