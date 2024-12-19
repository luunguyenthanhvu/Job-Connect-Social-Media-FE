import React from 'react';
import {Avatar, Box, Button, Divider, Paper, Typography} from '@mui/material';
import parse from 'html-react-parser';
import WorkIcon from "@mui/icons-material/Work";

const JobDetails = ({job, jobDetail}) => {
  if (!job || !jobDetail) {
    return <Typography>Loading job details...</Typography>; // Hiển thị thông báo khi dữ liệu chưa sẵn sàng
  }
  return (
      <Paper sx={{padding: 4, margin: 'auto', maxWidth: 800}}>
        {/* Hình ảnh công việc */}
        {/* Hình ảnh công ty và tên công ty */}
        <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 2,
            }}
        >
          {job.avatarUrl ? (
              <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundImage: `url(${job.avatarUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                    marginRight: 2,
                  }}
              />
          ) : (
              <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: 'primary.main',
                    marginRight: 2,
                  }}
              >
                <WorkIcon/>
              </Avatar>
          )}
          <Typography variant="h6" fontWeight="bold">
            {job.username
                || 'Company Name'} {/* Tên công ty, mặc định nếu không có */}
          </Typography>
        </Box>
        {/* Tiêu Đề Công Việc */}
        <Typography variant="h4" fontWeight="bold" sx={{marginBottom: 2}}>
          {job.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Employment Type: {jobDetail.employmentType}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Number of Positions: {jobDetail.numberOfPositions}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Address: {job.address}
        </Typography>
        <Divider sx={{marginY: 2}}/>

        {/* Mô Tả Công Việc */}
        <Typography variant="h6" fontWeight="bold">Job Description</Typography>
        <Typography paragraph>
          {parse(jobDetail.jobDescription)}
        </Typography>

        {/* Yêu Cầu Công Việc */}
        <Typography variant="h6" fontWeight="bold">Job Requirements</Typography>
        <Typography component="ul" sx={{paddingLeft: 3}}>
          {parse(jobDetail.jobExpertise)}
        </Typography>

        <Divider sx={{marginY: 2}}/>

        {/* Phúc Lợi */}
        <Typography variant="h6" fontWeight="bold">Welfare</Typography>
        <Typography component="ul" sx={{paddingLeft: 3}}>
          {parse(jobDetail.jobWelfare)}
        </Typography>

        <Divider sx={{marginY: 2}}/>

        {/* Nút Ứng Tuyển */}
        <Button variant="contained" color="primary" fullWidth>
          Ứng tuyển ngay
        </Button>
      </Paper>
  );
};

export default JobDetails;
