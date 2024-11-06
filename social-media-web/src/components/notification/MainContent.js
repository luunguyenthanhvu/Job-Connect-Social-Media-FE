import React from 'react';
import Card from "@mui/material/Card";
import {Box, List} from "@mui/material";
import NotificationItem from "./NotificationItem";

const MainContent = () => {
  const notificationItems = [
    {
      id: 1,
      avt: "https://media.licdn.com/dms/image/v2/C510BAQFdNUkdQtNukA/company-logo_200_200/company-logo_200_200/0/1630582291357/fpt_software_logo?e=1738800000&v=beta&t=DgmQWQBBHQuckr-FtRvNbxM4XbLWLoKmnSCjJ3u1LCU",
      notificationUser: "FPT Software",
      notificationContent: "Post a new job!",
      notificationTime: "06/11/2024",
      isRead: "true"
    },
    {
      id: 2,
      avt: "https://media.licdn.com/dms/image/v2/C510BAQFdNUkdQtNukA/company-logo_200_200/company-logo_200_200/0/1630582291357/fpt_software_logo?e=1738800000&v=beta&t=DgmQWQBBHQuckr-FtRvNbxM4XbLWLoKmnSCjJ3u1LCU",
      notificationUser: "FPT Software",
      notificationContent: "Post a new job!",
      notificationTime: "06/11/2024",
      isRead: "false"
    },
    {
      id: 3,
      avt: "https://media.licdn.com/dms/image/v2/C510BAQFdNUkdQtNukA/company-logo_200_200/company-logo_200_200/0/1630582291357/fpt_software_logo?e=1738800000&v=beta&t=DgmQWQBBHQuckr-FtRvNbxM4XbLWLoKmnSCjJ3u1LCU",
      notificationUser: "FPT Software",
      notificationContent: "Post a new job!",
      notificationTime: "06/11/2024",
      isRead: "true"
    }, {
      id: 4,
      avt: "https://media.licdn.com/dms/image/v2/C510BAQFdNUkdQtNukA/company-logo_200_200/company-logo_200_200/0/1630582291357/fpt_software_logo?e=1738800000&v=beta&t=DgmQWQBBHQuckr-FtRvNbxM4XbLWLoKmnSCjJ3u1LCU",
      notificationUser: "FPT Software",
      notificationContent: "Post a new job!",
      notificationTime: "06/11/2024",
      isRead: "true"
    }

  ];
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
