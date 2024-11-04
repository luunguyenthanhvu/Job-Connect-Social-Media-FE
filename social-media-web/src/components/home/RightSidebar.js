import React from 'react';
import Card from "@mui/material/Card";
import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  IconButton,
  Typography
} from "@mui/material";
import logo from "../../assets/img/logo-test.jpg";

const RightSideBar = () => {
  return (
      <Box sx={{paddingLeft: '10px', maxWidth: '80%'}}>
        <Card sx={{boxShadow: 3, borderRadius: 2, marginBottom: '10px'}}>
          <CardHeader
              avatar={
                <IconButton color="inherit">
                  <Avatar alt="Vu Luu" src={logo}/>
                </IconButton>
              }
              title="Luu Nguyen Thanh Vu"
              subheader="08/11/2003"
          />
          <CardContent sx={{paddingTop: '0px'}}>
            <Typography variant="body2" color="text.secondary">
              Student At Nong Lam University.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Address:</strong> 123 Main St, City, Country
            </Typography>
          </CardContent>
        </Card>
      </Box>
  );
};

export default RightSideBar;
