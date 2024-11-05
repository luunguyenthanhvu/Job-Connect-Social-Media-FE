import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  TextareaAutosize,
  Typography
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import logo from "../../assets/img/logo-test.jpg";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EmojiPicker from "emoji-picker-react";
import ImageIcon from "@mui/icons-material/Image";
import React, {useState} from "react";

const styles = {
  postModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "#fff",
    borderRadius: "8px",
    boxShadow: 24,
    padding: '10px',
  },

}
const CreatePostModal = ({createPost, handleCreatePost}) => {
  // State post image
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Sate for post content
  const [postContent, setPostContent] = useState('');
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleEmoji = e => {
    setPostContent(prev => prev + e.emoji);
    setOpenEmoji(false);
  }
  return (
      <Modal
          open={createPost}
          onClose={handleCreatePost}
          aria-labelledby="create-post-modal"
          aria-describedby="modal-to-create-post"
      >
        <Box
            style={styles.postModal}
        >
          {/* Close Button */}
          <IconButton
              onClick={handleCreatePost}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "gray",
                '&:hover': {
                  color: '#2196f3',
                },
              }}
          >
            <CancelIcon/>
          </IconButton>

          {/* User Info */}
          <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
            <Avatar alt="User avatar" src={logo}/>
            <Typography variant="h6">Vũ Lưu</Typography>
          </Box>

          {/* Post Content Textarea */}
          <TextareaAutosize
              maxRows={6}
              minRows={3}
              placeholder="What do you want to talk about?"
              style={{
                width: '99%',
                margin: '10px 0',
                maxHeight: '120px',
                height: '100px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#f9f9f9',
                resize: 'vertical',
              }}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
          />

          {/* Open emoji picker icons*/}
          <Box sx={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            mt: 1
          }}>
            <IconButton
                onClick={() => setOpenEmoji(prev => !prev)}
                sx={{
                  color: "gray",
                  '&:hover': {
                    color: '#2196f3',
                  },
                }}
            >
              <EmojiEmotionsIcon/>
            </IconButton>

            {openEmoji && (
                <Box
                    sx={{
                      position: "absolute",
                      bottom: "100%",
                      left: "50%",
                      right: 0,
                      mt: 1,
                      zIndex: 10,
                      boxShadow: 3,
                    }}
                >
                  <EmojiPicker
                      onEmojiClick={handleEmoji}
                      height={300}
                  />
                </Box>
            )}
          </Box>


          {/* Image Upload Button */}
          <Button
              variant="outlined"
              component="label"
              startIcon={<ImageIcon/>}
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                color: '#2196f3',
                borderColor: '#2196f3',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  borderColor: '#2196f3',
                },
              }}
          >
            Choose an Image
            <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
            />
          </Button>


          {/* Selected Images Preview */}
          {selectedImages.length > 0 && (
              <Box
                  sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    mt: 2,
                    padding: '5px',  // Optional: for some padding
                    whiteSpace: 'nowrap', // Prevent images from wrapping to the next line
                  }}
              >
                {selectedImages.map((image, index) => (
                    <Box key={index} sx={{
                      position: "relative",
                      minWidth: '100px',
                      marginRight: '8px'
                    }}> {/* Set minWidth to control the size */}
                      <img
                          src={image}
                          alt={`Selected ${index}`}
                          style={{
                            width: '100px', // Adjust the width to your preference
                            height: 'auto',
                            borderRadius: '8px',
                          }}
                      />
                      <IconButton
                          size="small"
                          onClick={() => handleRemoveImage(index)}
                          sx={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                          }}
                      >
                        <CancelIcon fontSize="small"/>
                      </IconButton>
                    </Box>
                ))}
              </Box>
          )}


          {/* Submit Button */}
          <Button
              variant="contained"
              color="primary"
              onClick={handleCreatePost}
              sx={{
                mt: 2,
                width: '100%'
              }}
          >
            Post
          </Button>
        </Box>
      </Modal>
  );
}

export default CreatePostModal;
