import React, {useState} from 'react';
import Card from "@mui/material/Card";
import {Box, List, Pagination, Typography} from "@mui/material";
import JobItem from './JobItem';

const MainContent = ({onJobClick, posts}) => {

  const jobsPerPage = 5; // Define the number of jobs per page
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const displayedJobs = posts.slice(
      (page - 1) * jobsPerPage,
      page * jobsPerPage
  );

  return (
      <Box>
        <Card sx={{boxShadow: 3, borderRadius: 2, marginBottom: '10px'}}>
          <Box sx={{padding: "10px 20px"}}>
            <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                }}
            >
              More jobs for you.
            </Typography>
            <Typography
                component="span"
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "inline",
                  fontSize: "0.875rem",
                }}
            >
              Based on your profile, preferences, and activity like applies,
              searches, and saves.
            </Typography>
          </Box>

          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {displayedJobs.map((job) => (
                <JobItem
                    key={job.id}
                    job={job}
                    onClick={() => onJobClick(job)}
                />
            ))}
          </List>

          {/* Pagination */}
          <Box sx={{display: 'flex', justifyContent: 'center', padding: 2}}>
            <Pagination
                count={Math.ceil(posts.length / jobsPerPage)}
                page={page}
                onChange={handlePageChange}
            />
          </Box>
        </Card>
      </Box>
  );
};

export default MainContent;
