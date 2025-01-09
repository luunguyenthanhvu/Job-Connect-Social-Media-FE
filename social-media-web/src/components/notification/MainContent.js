import React from 'react';
import Card from "@mui/material/Card";
import {Box, List} from "@mui/material";
import NotificationItem from "./NotificationItem";

const MainContent = () => {
  const notifications = [
    {
      id: 1,
      avt: "http://www.lavender.com.vn/wp-content/uploads/chup-anh-profile-hinh-anh-ca-nhan-2021-2.jpg",
      notificationUser: "Vũ Lưu",
      notificationContent: "Người dùng đã ứng tuyển vào công việc!",
      notificationTime: "07/11/2024",
      isRead: "false"
    },
    {
      id: 2,
      avt: "https://live.staticflickr.com/65535/50663863366_b21325e5b5_k.jpg",
      notificationUser: "Thanh Long",
      notificationContent: "Người dùng đã ứng tuyển vào công việc!",
      notificationTime: "06/11/2024",
      isRead: "false"
    },
    {
      id: 3,
      avt: "https://studiochupanhdep.com/Upload/Images/Album/anh-nu-doanh-nhan-22.jpg",
      notificationUser: "Thúy Vy",
      notificationContent: "Người dùng đã ứng tuyển vào công việc!",
      notificationTime: "06/11/2024",
      isRead: "true"
    },
    {
      id: 4,
      avt: "https://hthaostudio.com/wp-content/uploads/2019/08/Doanh-nhan-nu-dep-2.jpg",
      notificationUser: "Thanh Hoa",
      notificationContent: "Người dùng đã ứng tuyển vào công việc!",
      notificationTime: "06/11/2024",
      isRead: "true"
    }
  ]
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
