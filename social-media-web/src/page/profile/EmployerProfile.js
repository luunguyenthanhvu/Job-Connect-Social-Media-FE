import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { Edit, Email, LocationOn, Phone } from '@mui/icons-material';
import PostCard from '../../components/abstract-components/PostCard';

const EmployerProfile = () => {
  const [employer, setEmployer] = useState({
    name: 'Công ty ABC',
    address: '123 Đường ABC, Quận 1, TP. Hồ Chí Minh',
    phone: '0123 456 789',
    email: 'contact@companyabc.com',
    bio: 'Công ty chuyên về phát triển phần mềm...',
  });
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const handleEditClick = () => setOpenEditDialog(true);
  const handleCloseEditDialog = () => setOpenEditDialog(false);

  return (
      <Box sx={{ padding: 3, width: '80%', margin: 'auto', minHeight: '100vh' }}>
        {/* Thông tin Nhà tuyển dụng */}
        <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3, position: 'relative' }}>
          <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={handleEditClick}><Edit /></IconButton>
          <Avatar sx={{ width: 120, height: 120, mb: 2 }} src="/company-logo.jpg" alt={employer.name} />
          <Typography variant="h4" fontWeight="bold" sx={{ textAlign: 'center', mb: 1 }}>{employer.name}</Typography>
          <Typography variant="body1" color="textSecondary">{employer.bio}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2 }}>
            <Button startIcon={<LocationOn />}>{employer.address}</Button>
            <Button startIcon={<Phone />}>{employer.phone}</Button>
            <Button startIcon={<Email />}>{employer.email}</Button>
          </Box>
        </Paper>

        {/* Tabs cho Bài Post và Bài Đăng Tuyển Dụng */}
        {/*<Box>*/}
        {/*  <Tabs value={tabValue} onChange={handleTabChange} centered>*/}
        {/*    <Tab label="Bài Post" />*/}
        {/*    <Tab label="Bài Đăng Tuyển Dụng" />*/}
        {/*  </Tabs>*/}

        {/*  {tabValue === 0 && (*/}
        {/*      <Box sx={{ mt: 3 }}>*/}
        {/*        /!* Danh sách bài post *!/*/}
        {/*        <PostCard/>*/}
        {/*        <PostCard />*/}
        {/*        /!* Thêm các bài post khác tại đây *!/*/}
        {/*      </Box>*/}
        {/*  )}*/}

        {/*  {tabValue === 1 && (*/}
        {/*      <Box sx={{ mt: 3 }}>*/}
        {/*        /!* Danh sách bài đăng tuyển dụng *!/*/}
        {/*        <PostCard />*/}
        {/*        <PostCard  />*/}
        {/*        /!* Thêm các bài đăng tuyển dụng khác tại đây *!/*/}
        {/*      </Box>*/}
        {/*  )}*/}
        {/*</Box>*/}

        {/* Dialog chỉnh sửa thông tin */}
        <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
          <DialogTitle>Chỉnh sửa thông tin nhà tuyển dụng</DialogTitle>
          <DialogContent>
            <TextField fullWidth label="Tên Công ty" value={employer.name} onChange={(e) => setEmployer({ ...employer, name: e.target.value })} />
            <TextField fullWidth label="Địa chỉ" value={employer.address} onChange={(e) => setEmployer({ ...employer, address: e.target.value })} />
            <TextField fullWidth label="Số điện thoại" value={employer.phone} onChange={(e) => setEmployer({ ...employer, phone: e.target.value })} />
            <TextField fullWidth label="Email" value={employer.email} onChange={(e) => setEmployer({ ...employer, email: e.target.value })} />
            <TextField fullWidth label="Giới thiệu công ty" value={employer.bio} onChange={(e) => setEmployer({ ...employer, bio: e.target.value })} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditDialog}>Hủy</Button>
            <Button onClick={handleCloseEditDialog}>Lưu</Button>
          </DialogActions>
        </Dialog>
      </Box>
  );
};

export default EmployerProfile;
