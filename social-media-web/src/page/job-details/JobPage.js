import React, {useState} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import JobList from './JobList';
import JobDetail from './JobDetail';

const JobPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState('');

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (<Box sx={{
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'column',
    minHeight: '100vh'
  }}>
    <Grid container sx={{flexGrow: 1, height: 'calc(100vh - 120px)'}}>
      {/* Job List */}
      <Grid item xs={12} md={4} sx={{overflowY: 'auto', height: '100%'}}>
        <JobList filter={filter} onJobClick={handleJobClick}/>
      </Grid>

      {/* Job Detail */}
      <Grid item xs={12} md={8} sx={{overflowY: 'auto', height: '100%'}}>
        {selectedJob ? <JobDetail job={selectedJob}/> : <Box
            sx={{padding: 2}}>Select a job to see details</Box>}
      </Grid>
    </Grid>
  </Box>);
};

export default JobPage;
