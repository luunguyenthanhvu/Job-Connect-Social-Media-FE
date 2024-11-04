import React, {useState} from 'react';
import Card from "@mui/material/Card";
import {
  Avatar,
  Box,
  Button,
  CardHeader,
  IconButton,
  Modal,
  Typography
} from "@mui/material";
import logo from "../../assets/img/logo-test.jpg";

const MainContent = () => {
  // State for post
  const [createPost, setCreatePost] = useState(false);

  // Function handle
  const handleCreatePost = () => {
    setCreatePost((pre) => !pre);
  };

  return (
      <Box>
        <Card sx={{boxShadow: 3, borderRadius: 2, marginBottom: '10px'}}>
          <CardHeader
              avatar={
                <Box
                    sx={{display: "flex", alignItems: "center", width: '100%'}}>
                  <IconButton color="inherit">
                    <Avatar alt="Vu Luu" src={logo}/>
                  </IconButton>
                  <Button
                      onClick={handleCreatePost}
                      variant="outlined"
                      sx={{
                        padding: "4px 8px",
                        borderRadius: "20px",
                        backgroundColor: "#f5f5f5",
                        flex: 1,
                        color: '#000',
                        border: '1px solid #F3F2F2',
                        marginLeft: '8px',
                        textAlign: 'left',
                        '&:hover': {
                          color: '#2196f3',
                          border: '1px solid #2196f3',
                        }
                      }}
                  >
                    Create a post...
                  </Button>
                </Box>
              }
          />
        </Card>

        <Modal
            open={createPost} // Mở modal dựa vào trạng thái createPost
            onClose={handleCreatePost} // Đóng modal khi nhấp ra ngoài
            aria-labelledby="create-post-modal"
            aria-describedby="modal-to-create-post"
        >
          <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "#fff",
                borderRadius: "8px",
                boxShadow: 24,
                p: 4,
              }}
          >
            <Typography variant="h6" id="create-post-modal" gutterBottom>
              Create Post
            </Typography>
            <Typography variant="body2" sx={{mb: 2}}>
              Enter the details for your post here.
            </Typography>
            <Button variant="contained" color="primary"
                    onClick={handleCreatePost}>
              Submit
            </Button>
          </Box>
        </Modal>
      </Box>
  );
};

export default MainContent;
