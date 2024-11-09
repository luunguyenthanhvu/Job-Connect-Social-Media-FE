import React from 'react';
import {Button, Divider, Paper, Typography} from '@mui/material';

const JobDetails = () => {
  return (
      <Paper sx={{padding: 4, margin: 'auto', maxWidth: 800}}>
        {/* Tiêu Đề Công Việc */}
        <Typography variant="h4" fontWeight="bold" sx={{marginBottom: 2}}>
          Front-End Developer
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Full-time | Remote
        </Typography>

        <Divider sx={{marginY: 2}}/>

        {/* Mô Tả Công Việc */}
        <Typography variant="h6" fontWeight="bold">Mô Tả Công Việc</Typography>
        <Typography paragraph>
          Làm việc chặt chẽ với đội ngũ phát triển để tạo ra các giao diện người
          dùng thân thiện.
          Sử dụng React, JavaScript, và CSS để xây dựng các thành phần
          front-end.
        </Typography>

        {/* Yêu Cầu Công Việc */}
        <Typography variant="h6" fontWeight="bold">Yêu Cầu Công
          Việc</Typography>
        <Typography component="ul" sx={{paddingLeft: 3}}>
          <li>Ít nhất 2 năm kinh nghiệm làm việc với React.</li>
          <li>Hiểu biết về HTML, CSS và JavaScript.</li>
          <li>Khả năng làm việc trong nhóm.</li>
        </Typography>

        <Divider sx={{marginY: 2}}/>

        {/* Phúc Lợi */}
        <Typography variant="h6" fontWeight="bold">Phúc Lợi</Typography>
        <Typography component="ul" sx={{paddingLeft: 3}}>
          <li>Lương thưởng hấp dẫn.</li>
          <li>Cơ hội thăng tiến.</li>
          <li>Môi trường làm việc linh hoạt.</li>
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
