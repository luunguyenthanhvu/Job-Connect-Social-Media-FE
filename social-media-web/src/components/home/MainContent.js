import React, {useState} from 'react';
import Card from "@mui/material/Card";
import {Avatar, Box, Button, CardHeader, IconButton} from "@mui/material";
import logo from "../../assets/img/logo-test.jpg";
import CreatePostModal from "./CreatePostModal";
import PostCard from "../abstractComponents/PostCard"

const MainContent = () => {
  // State for post
  const [createPost, setCreatePost] = useState(false);

  // Function handle
  const handleCreatePost = () => {
    setCreatePost((pre) => !pre);
  };

  const mockPosts = [
    {
      id: 1,
      avt: "https://media.licdn.com/dms/image/v2/C560BAQFVx7L2Y-Fz2w/company-logo_200_200/company-logo_200_200/0/1630588427440/kms_technology_logo?e=1738800000&v=beta&t=3B0OV23L3uQ9Envj04rr_LzFbkbhio5-P7eJcJKD_6c",
      title: "KMS Technology",
      date: "November 01, 2024",
      content: "\"My favorite thing about being an Engineering Manager is seeing my team grow and succeed, watch them develop their skills, and contribute to their professional journeys.\" \n"
          + "\n"
          + "Gustavo Mazatan, our passionate Engineering Manager, is more than just a tech wizard. When he's not leading his team at KMS Technology, Inc., he's exploring new cultures, tinkering with computers, or jamming out to Linkin Park. With 14 years of experience, Gustavo is dedicated to guiding his team to success and fostering their professional growth.\n"
          + "\n"
          + "Learn more about Gustavo's journey in our latest KMS Spotlight episode 🌎 🛫 \n"
          + "\n"
          + "hashtag#KMSSpotlight hashtag#KMSTechnology",
      image: "https://media.licdn.com/dms/image/v2/D5622AQF-F4NqCNaQuA/feedshare-shrink_1280/feedshare-shrink_1280/0/1730717468041?e=1733961600&v=beta&t=v4P8L301440oPwa3v2OcODwiAqCml1Z7i1LiDFqk9BA",
      likes: 20,
      comments: 5,
    },
    {
      id: 2,
      avt: "https://media.licdn.com/dms/image/v2/C510BAQFdNUkdQtNukA/company-logo_200_200/company-logo_200_200/0/1630582291357/fpt_software_logo?e=1738800000&v=beta&t=DgmQWQBBHQuckr-FtRvNbxM4XbLWLoKmnSCjJ3u1LCU",
      title: "FPT Software",
      date: "October 25, 2024",
      content: "On its journey to becoming a premier global digital hub, Vietnam’s young and dynamic talent pool stands as the nation's powerful competitive advantage. As Vietnam's leading corporation, FPT has been actively nurturing a continuous talent pipeline to fuel the nation's momentum in this fast-evolving market, offering comprehensive education and specialized training, including high-growth sectors such as AI and semiconductors.\n"
          + "\n"
          + "Join us at FPT Techday 2024 to explore how we’re building a future-ready workforce. Hear directly from FPT Software Chairwoman Mdm. Chu Thi Thanh Ha on our vision for the workforce of tomorrow.\n"
          + "📅 Time: November 13-14, 08:00 AM – 05:00 PM ICT\n"
          + "📍 Location: Thiskyhall Sala Convention Center, Ho Chi Minh City, Vietnam\n"
          + "\n"
          + "👉🏻 Tune in for more updates and be part of the conversation: https://lnkd.in/gxiC8qth\n"
          + "👉🏻 Learn more: https://lnkd.in/dXM7iRNZ\n"
          + "hashtag#FPTTechday hashtag#FPTTechday2024 hashtag#FPT hashtag#FPTSoftware",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEtLi8OkhMPiw/feedshare-shrink_1280/feedshare-shrink_1280/0/1730781181861?e=1733961600&v=beta&t=ScGD3flzXwGwz-cXJr0BaVBUzVrfr9dgmqfXYRVJ5Z8",
      likes: 15,
      comments: 3,
    },
  ];

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
                        minWidth: '550px',
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

        {/* For user create a post*/}
        <CreatePostModal
            createPost={createPost}
            handleCreatePost={handleCreatePost}
        />

        {/*  News Feed*/}
        {mockPosts.map(post => (
            <PostCard
                post={post}
                maxWidth="100%"
            />
        ))}
      </Box>
  );
};

export default MainContent;
