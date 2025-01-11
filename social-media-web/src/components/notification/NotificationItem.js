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
import {useNavigate} from "react-router-dom";

const NotificationItem = ({notification}) => {
      // Redirect to other page
      const navigate = useNavigate();

      console.log(notification)
      const [isRead, setIsRead] = useState(notification.read === "true");
      // Hàm xử lý khi click vào thông báo
      const handleClick = () => {
        setIsRead(true); // Đánh dấu thông báo đã được đọc

        // Điều hướng đến trang tương ứng
        switch (notification.type) {
          case 'SUGGEST_JOB':
            navigate(`/job-detail?id=${notification.postId}`); // Điều hướng tới trang job với query param id
            break;
          case 'NEW_MESSAGE':
            navigate(`/messages?id=${notification.id}`); // Điều hướng tới trang tin nhắn
            break;
          case 'SYSTEM_ALERT':
            navigate(`/alerts?id=${notification.id}`); // Điều hướng tới trang cảnh báo
            break;
          default:
            navigate('/'); // Nếu không có type hợp lệ, điều hướng về trang chủ
            break;
        }
      };

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
              onClick={() => handleClick()} // Update state when user clicks on the notification
              secondaryAction={
                <IconButton aria-label="settings">
                  <MoreVertIcon/>
                </IconButton>
              }
          >


            <ListItemAvatar>
              <Avatar alt={notification.userImg} src={notification.userImg}/>
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
                          display: 'inline', // Đặt thành inline để nằm cùng hàng
                        }}
                    >
                      {notification.userName}:
                    </Typography>

                    <Typography
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                          display: 'span',
                          marginLeft: '5px',
                        }}
                    >
                      {notification.message}
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
                    {notification.createAt}
                  </Typography>
                }
            />
          </ListItem>
      )
          ;
    }
;

export default NotificationItem;
