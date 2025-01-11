import React from 'react';
import {Box, Card, List} from "@mui/material";
import NotificationItem from "./NotificationItem";

const MainContent = ({notifications}) => {
  if (!Array.isArray(notifications)) {
    return <div>Loading...</div>; // Hoặc hiển thị một thông báo nếu notifications không phải mảng
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
