import React from 'react';
import {
  Avatar,
  Divider,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const JobItem = ({job, isSaved, onClick}) => (
    <div>
      <ListItem
          alignItems="flex-start"
          sx={{
            padding: "10px 20px",
            marginBottom: '10px'
          }}
          secondaryAction={
            <IconButton edge="end">
              <BookmarksIcon sx={{color: isSaved ? '#0077B5' : 'grey'}}/>
            </IconButton>
          }
      >
        <ListItemAvatar>
          <Avatar alt={job.username} src={job.avatarUrl}/>
        </ListItemAvatar>
        <ListItemText
            primary={
              <Link
                  variant="subtitle1"
                  sx={{
                    fontWeight: 'bold',
                    color: '#0077B5',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationColor: '#0077B5',
                    }
                  }}
                  onClick={onClick}
              >
                {job.title}
              </Link>
            }
            secondary={
              <div>
                {/* Adjusting Typography components to prevent invalid nesting */}
                <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 700,
                      display: 'block',
                      marginBottom: '4px'
                    }}
                    component="span" // Change component to span instead of p
                >
                  {job.username}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                    component="span" // Change component to span instead of p
                >
                  {job.address}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      display: 'block',
                      fontStyle: 'italic',
                    }}
                    component="span" // Change component to span instead of p
                >
                  Posting date: {job.postedDate}
                </Typography>
              </div>
            }
        />
      </ListItem>
      <Divider variant="inset" component="li"/>
    </div>
);

export default JobItem;
