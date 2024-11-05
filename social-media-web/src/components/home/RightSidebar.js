import React from 'react';
import {Avatar, Box, Grid, Link, Typography} from "@mui/material";
import AppLogo from "../icons/AppLogo"

const styles = {
  linkStyle: {
    display: 'block',
    color: '#757575', // Màu sắc mặc định của liên kết
  }
}

const RightSideBar = () => {
  return (
      <Box sx={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        position: 'fixed',
        maxHeight: '80%',
        overflowY: 'auto',
        boxShadow: 2,
        zIndex: 1000,
      }}>
        <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
          <Grid item xs={12} sm={6}>
            <Link href="#" variant="body2" style={styles.linkStyle}>
              Accessibility
            </Link>
            <Link href="#" variant="body2" style={styles.linkStyle}>
              Help Center
            </Link>
            <Link href="#" variant="body2" style={styles.linkStyle}>
              Privacy & Terms
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link href="#" variant="body2" style={styles.linkStyle}>
              Ad Choices
            </Link>
            <Link href="#" variant="body2" style={styles.linkStyle}>
              Advertising
            </Link>
          </Grid>
        </Grid>

        {/* Phần tên ứng dụng và logo */}
        <Box sx={{marginTop: '20px', textAlign: 'center'}}>
          <AppLogo
              width={60}
              height={60}
          />
        </Box>
        <Typography variant="body2" sx={{
          color: 'text.secondary',
          textAlign: 'center',
          marginTop: '5px'
        }}>
          JobConnect Corporation © 2024
        </Typography>
      </Box>
  );
};

export default RightSideBar;
