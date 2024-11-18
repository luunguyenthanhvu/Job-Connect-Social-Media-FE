// CustomAlert.js
import React from 'react';
import {Alert, Snackbar} from '@mui/material';

const SuccessAlert = ({
  open,
  setOpenAlert,
  alertMessage,
  severity = 'success'
}) => {
  return (
      <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpenAlert(false)}
      >
        <Alert
            severity={severity}
            onClose={() => setOpenAlert(false)}
            sx={{
              width: '100%',
              backgroundColor: '#00a6ff',
              color: '#fff',
              fontWeight: 'bold',
              '& .MuiAlert-icon': {
                color: '#fff',
              },
            }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
  );
};

export default SuccessAlert;
