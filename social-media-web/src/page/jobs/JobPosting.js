import React, {useState} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';

const JobPosting = ({onClose}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [benefits, setBenefits] = useState('');

  const handlePostJob = () => {
    // Gửi dữ liệu tuyển dụng
    const jobData = {
      jobTitle,
      location,
      jobType,
      jobDescription,
      skills,
      benefits,
    };
    console.log('Job posted:', jobData);
    onClose(); // Đóng modal sau khi đăng
  };

  return (
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>Đăng Tuyển Dụng</DialogTitle>
        <DialogContent
            dividers
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxHeight: '80vh', // Giới hạn chiều cao pop-up
              overflowY: 'auto', // Cho phép cuộn dọc
              padding: 2,
              width: '600px', // Đặt chiều rộng hợp lý cho modal
            }}
        >
          <TextField
              label="Tên Công Việc"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
          />

          {/* Select địa điểm */}
          <FormControl fullWidth>
            <InputLabel>Địa Điểm</InputLabel>
            <Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Địa Điểm"
            >
              <MenuItem value="Ho Chi Minh City">Ho Chi Minh City</MenuItem>
              <MenuItem value="Hanoi">Hanoi</MenuItem>
              <MenuItem value="Da Nang">Da Nang</MenuItem>
              <MenuItem value="Hai Phong">Hai Phong</MenuItem>
            </Select>
          </FormControl>

          {/* Select loại công việc */}
          <FormControl fullWidth>
            <InputLabel>Loại Công Việc</InputLabel>
            <Select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                label="Loại Công Việc"
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </FormControl>

          <TextField
              label="Mô Tả Công Việc"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              multiline
              rows={4}
          />
          <TextField
              label="Kỹ Năng Chuyên Môn"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              multiline
              rows={3}
          />
          <TextField
              label="Phúc Lợi Dành Cho Bạn"
              value={benefits}
              onChange={(e) => setBenefits(e.target.value)}
              multiline
              rows={3}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Hủy
          </Button>
          <Button onClick={handlePostJob} variant="contained" color="primary">
            Đăng Tuyển
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default JobPosting;
