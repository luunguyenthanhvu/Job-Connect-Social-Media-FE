import React from 'react';
import Card from "@mui/material/Card";
import {Box, List, Pagination, Typography} from "@mui/material";
import JobItem from "./JobItem";

const MainContent = ({onJobClick, jobs, page, setPage}) => {

  // Cập nhật trang khi người dùng chọn trang mới
  const handlePageChange = (event, value) => {
    setPage(value - 1); // Pagination sử dụng 1-based index, backend sử dụng 0-based index
  };

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
            {jobs.map((job) => {
              return (
                  <JobItem
                      key={job.id}
                      job={job}
                      onClick={() => onJobClick(job)}
                  />
              );
            })}
          </List>

          {/* Pagination */}
          <Box sx={{display: 'flex', justifyContent: 'center', padding: 2}}>
            <Pagination
                count={jobs.totalPages}
                page={page + 1}
                onChange={handlePageChange}
                color="primary"
            />
          </Box>
        </Card>
      </Box>
  );
};

export default MainContent;
