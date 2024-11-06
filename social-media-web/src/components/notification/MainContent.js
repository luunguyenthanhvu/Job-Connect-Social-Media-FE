import React from 'react';
import Card from "@mui/material/Card";
import {Box, List} from "@mui/material";
import NotificationItem from "./NotificationItem";

const MainContent = () => {

  return (
      <Box>
        <Card sx={{boxShadow: 3, borderRadius: 2, marginBottom: '10px'}}>
          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            <NotificationItem>

            </NotificationItem>
          </List>
        </Card>
      </Box>
  );
};

export default MainContent;
