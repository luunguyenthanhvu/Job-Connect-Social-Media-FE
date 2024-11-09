import React from 'react';
import {Box, Button, Typography} from '@mui/material';

const JobDetail = ({job}) => {
  return (
      <Box sx={{padding: 2}}>
        <Typography variant="h5" gutterBottom>
          {job.jobTitle}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" paragraph>
          {job.companyName} - {job.address}
        </Typography>
        <Typography variant="body1" paragraph>
          {/* Placeholder for job description */}
          Detailed job description will go here.
        </Typography>
        <Button variant="contained" color="primary">
          Apply Now
        </Button>
      </Box>
  );
};

export default JobDetail;
