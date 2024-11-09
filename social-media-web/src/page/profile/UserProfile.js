import React, {useState} from 'react';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import {Edit, Email, LocationOn, Phone} from '@mui/icons-material';
import PostCard from '../../components/abstract-components/PostCard';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Nguyễn Văn A',
    age: 25,
    address: '123 Đường ABC, Quận 1, TP. Hồ Chí Minh',
    phone: '0123 456 789',
    email: 'nguyenvana@example.com',
    bio: 'Front-end Developer with 3 years of experience...',
    education: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'Đại học Bách Khoa',
        year: '2019'
      },
    ],
    experience: [
      {
        position: 'Front-end Developer',
        company: 'Tech Company',
        duration: '2020 - Present',
        description: 'Worked on multiple front-end projects using React and Angular.'
      },
      {
        position: 'Intern',
        company: 'Startup Inc.',
        duration: '2019',
        description: 'Assisted in web development tasks and learned the basics of React.'
      },
    ],
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My first post',
      content: 'This is the content of my first post...',
      timestamp: '1 day ago',
      likes: 10
    },
    {
      id: 2,
      title: 'Another interesting post',
      content: 'Some interesting content here...',
      timestamp: '2 days ago',
      likes: 20
    },
  ]);

  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleEditClick = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  return (
      <Box sx={{
        padding: 3,
        width: '80%',
        margin: 'auto',
        minHeight: '100vh'
      }}>
        {/* Thông tin cơ bản */}
        <Paper elevation={3} sx={{
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 3,
          position: 'relative'
        }}>
          {/* Icon chỉnh sửa ảnh đại diện */}
          <IconButton sx={{position: 'absolute', top: 16, right: 16}}
                      onClick={handleEditClick}>
            <Edit/>
          </IconButton>
          <Avatar sx={{width: 120, height: 120, mb: 2, position: 'relative'}}
                  src="/profile-avatar.jpg" alt={user.name}>
            <IconButton sx={{position: 'absolute', bottom: 0, right: 0}}>
              <Edit/>
            </IconButton>
          </Avatar>
          <Typography variant="h4" fontWeight="bold"
                      sx={{textAlign: 'center', mb: 1}}>{user.name}</Typography>
          <Typography variant="body1"
                      color="textSecondary">{user.bio}</Typography>

          {/* Thông tin liên hệ */}
          <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, my: 2}}>
            <Chip icon={<LocationOn/>} label={user.address} variant="outlined"/>
            <Chip icon={<Phone/>} label={user.phone} variant="outlined"/>
            <Chip icon={<Email/>} label={user.email} variant="outlined"/>
          </Box>

          {/* Kỹ năng */}
          <Divider sx={{width: '100%', my: 2}}/>
          <Typography variant="h6" sx={{mb: 1}}>Kỹ năng</Typography>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center'
          }}>
            {user.skills.map((skill, index) => (
                <Chip key={index} label={skill} color="primary"
                      variant="outlined"/>
            ))}
          </Box>
        </Paper>

        {/* CV của người dùng */}
        <Paper elevation={3} sx={{padding: 3, mb: 3}}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>CV của người
            dùng</Typography>

          {/* Học vấn */}
          <Box sx={{mb: 2}}>
            <Typography variant="h5" fontWeight="medium">Học vấn</Typography>
            {user.education.map((edu, index) => (
                <Box key={index} sx={{mb: 1, ml: 2}}>
                  <Typography
                      variant="subtitle1">{edu.degree} - {edu.institution}</Typography>
                  <Typography variant="body2"
                              color="textSecondary">{edu.year}</Typography>
                </Box>
            ))}
          </Box>

          {/* Kinh nghiệm làm việc */}
          <Box sx={{mb: 2}}>
            <Typography variant="h5" fontWeight="medium">Kinh nghiệm làm
              việc</Typography>
            {user.experience.map((exp, index) => (
                <Box key={index} sx={{mb: 1, ml: 2}}>
                  <Typography
                      variant="subtitle1">{exp.position} - {exp.company}</Typography>
                  <Typography variant="body2"
                              color="textSecondary">{exp.duration}</Typography>
                  <Typography variant="body2">{exp.description}</Typography>
                </Box>
            ))}
          </Box>
        </Paper>

        {/* Các bài post đã đăng */}
        <Paper elevation={3} sx={{padding: 3}}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>Các bài
            post</Typography>
          <Divider sx={{my: 2}}/>
          <Grid container spacing={2} direction="column">
            {posts.map((post) => (
                <Grid item xs={12} key={post.id}>
                  <PostCard post={post} maxWidth="100%"/>
                </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Dialog chỉnh sửa thông tin */}
        <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
          <DialogTitle>Chỉnh sửa thông tin người dùng</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" label="Họ và tên" fullWidth
                       variant="outlined" defaultValue={user.name}/>
            <TextField margin="dense" label="Số điện thoại" fullWidth
                       variant="outlined" defaultValue={user.phone}/>
            <TextField margin="dense" label="Email" fullWidth variant="outlined"
                       defaultValue={user.email}/>
            <TextField margin="dense" label="Địa chỉ" fullWidth
                       variant="outlined" defaultValue={user.address}/>
            <TextField margin="dense" label="Đổi mật khẩu" fullWidth
                       variant="outlined" type="password"/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditDialog} color="primary">Hủy</Button>
            <Button onClick={handleCloseEditDialog} color="primary">Lưu</Button>
          </DialogActions>
        </Dialog>
      </Box>
  );
};

export default UserProfile;
