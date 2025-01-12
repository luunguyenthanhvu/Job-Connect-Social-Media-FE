import React from 'react';
import {Box, Card, List, Typography} from "@mui/material";
import NotificationItem from "./NotificationItem";

const MainContent = ({notifications}) => {
  if (!Array.isArray(notifications)) {
    return (
        <Box>
          <Card sx={{
            boxShadow: 3,
            borderRadius: 2,
            marginBottom: '10px',
            padding: 2
          }}>
            <Typography variant="body1" color="textSecondary">
              You have no notifications
            </Typography>
          </Card>
        </Box>
    );
  }

  return (
      <Box>
        <Card sx={{boxShadow: 3, borderRadius: 2, marginBottom: '10px'}}>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {notifications.map((notify) => (
                <NotificationItem key={notify.id} notification={notify}/>
            ))}
          </List>
        </Card>
      </Box>
  );
};

export default MainContent;
