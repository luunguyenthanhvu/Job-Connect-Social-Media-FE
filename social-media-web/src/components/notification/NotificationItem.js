import React, {useState} from 'react';
import {
  Avatar,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NotificationItem = ({notification}) => {
  const [isRead, setIsRead] = useState(notification.isRead === "true");

  return (
      <ListItem
          alignItems="flex-start"
          sx={{
            padding: "10px 20px",
            cursor: "pointer",
            borderBottom: "1px solid #e6e6e6",
            backgroundColor: isRead ? 'transparent' : '#f0f8ff', // Different background for unread notifications
            '&:hover': {
              background: '#efeeee',
            },
            fontWeight: isRead ? 400 : 700, // Bold for unread notifications
          }}
          onClick={() => setIsRead(
              true)} // Update state when user clicks on the notification
          secondaryAction={
            <IconButton aria-label="settings">
              <MoreVertIcon/>
            </IconButton>
          }
      >


        <ListItemAvatar>
          <Avatar alt={notification.notificationUser} src={notification.avt}/>
        </ListItemAvatar>

        <ListItemText
            primary={
              <Link
                  variant="subtitle1"
                  sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: '#7b7b7b',
                    },
                  }}
              >
                <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#0077B5',
                      display: 'span',
                    }}
                >
                  {notification.notificationUser}:
                </Typography>
                <Typography
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      display: 'span',
                      marginLeft: '5px',
                    }}
                >
                  {notification.notificationContent}
                </Typography>
              </Link>
            }
            secondary={
              <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    display: 'block',
                    fontStyle: 'italic',
                  }}
              >
                {notification.notificationTime}
              </Typography>
            }
        />
      </ListItem>
  );
};

export default NotificationItem;
