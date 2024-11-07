import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const JobDetail = ({ job }) => {
  return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" paragraph>
          {job.company} - {job.location}
        </Typography>
        <Typography variant="body1" paragraph>
          {job.description}
        </Typography>
        <Button variant="contained" color="primary">
          Apply Now
        </Button>
      </Box>
  );
};

export default JobDetail;
