import React from "react";
import Card from '@mui/material/Card';
import {Box, Typography} from "@mui/material";

const UserCV = () => {
  return (
      <Card sx={{
        width: '80%',
        display: 'flex',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "auto"
      }}>
        <Box sx={{
          width: '30%',
          padding: '20px',
          backgroundColor: 'rgb(94, 94, 94)',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <img
              src="https://faceinch.vn/upload/elfinder/%E1%BA%A2nh/chup-chan-dung-5.jpg"
              alt="Image for CV"
              style={{
                width: '150px',
                height: 'auto',
                display: 'block',
              }}
          />

          <Typography variant="h6" color={"rgba(20,171,226,255)"} component="h4" gutterBottom>
            Luu Nguyen Thanh Vu
          </Typography>
        </Box>

        <Box sx={{
          width: '70%',
          padding: '20px'
        }}>
          Right Content
        </Box>
      </Card>
  );
}

export default UserCV;
