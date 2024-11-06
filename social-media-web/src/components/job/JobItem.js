// JobItem.js
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

const JobItem = ({job, isSaved, onToggleSave}) => (
    <>
      <ListItem
          alignItems="flex-start"
          sx={{
            padding: "10px 20px",
            marginBottom: '10px'
          }}
          secondaryAction={
            <IconButton onClick={() => onToggleSave(job.id)} edge="end">
              <BookmarksIcon sx={{color: isSaved ? '#0077B5' : 'grey'}}/>
            </IconButton>
          }
      >
        <ListItemAvatar>
          <Avatar alt={job.companyName} src={job.avt}/>
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
                {job.jobTitle}
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
                  {job.companyName}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      display: 'block',
                      marginBottom: '4px'
                    }}
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
                >
                  {job.timePost} ({job.type})
                </Typography>
              </>
            }

        />
      </ListItem>
      <Divider variant="inset" component="li"/>
    </>
);

export default JobItem;
