import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import {useLoading} from "../../context/LoadingContext";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import SuccessAlert from "../../context/SuccessAlert";

function ForgotPassword({open, handleClose}) {
  // Loading content
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();

  // Redirect to other page
  const navigate = useNavigate();

  // Alert info for user
  const [openAlert, setOpenAlert] = React.useState(false); // State for controlling Snackbar visibility
  const [alertMessage, setAlertMessage] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log(data.get('email')); // Debugging line to log the email value

    try {
      showLoading();
      const response = await axios.post(apiConfig.resetPassword, {
        email: data.get('email')
      });

      if (response.status === 200) {
        // Show success alert
        setAlertMessage('Update password success!');
        setOpenAlert(true);

        // Close the dialog after successful password update
        setTimeout(() => {
          handleClose();
        }, 1000); // Delay before closing the dialog
      }
    } catch (error) {
      throwError(error);
    } finally {
      hideLoading();
    }
  };

  return (
      <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: handleSubmit,
            sx: {backgroundImage: 'none'},
          }}
      >
        <DialogTitle>Reset password</DialogTitle>
        <DialogContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
            }}
        >
          <DialogContentText>
            Enter your account&apos;s email address, and we&apos;ll send you a
            new password.
          </DialogContentText>
          <OutlinedInput
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email address"
              placeholder="Email address"
              type="email"
              fullWidth
          />
        </DialogContent>
        <DialogActions sx={{pb: 3, px: 3}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" type="submit">
            Continue
          </Button>
        </DialogActions>
        <SuccessAlert
            open={openAlert}
            setOpenAlert={setOpenAlert}
            alertMessage={alertMessage}
        />
      </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
