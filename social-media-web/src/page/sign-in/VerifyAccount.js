import * as React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography
} from '@mui/material';
import {styled} from '@mui/material/styles';
import AppTheme from '../../components/shared-theme/AppTheme';
import {SitemarkIcon} from './CustomIcons';

const Container = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: theme.spacing(2),
}));

const FormBox = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: 400,
  width: '100%',
  padding: theme.spacing(4),
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: 8,
}));

const LogoContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

export default function VerifyAccount() {
  const [verificationCode, setVerificationCode] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messageType, setMessageType] = React.useState(''); // 'success' or 'error'

  const handleVerify = () => {
    if (!verificationCode) {
      setMessage('Please enter the verification code.');
      setMessageType('error');
      return;
    }
    setIsLoading(true);
    // Simulate verification API request
    setTimeout(() => {
      if (verificationCode === '123456') {  // Simulating successful verification code
        setMessage('Account verified successfully!');
        setMessageType('success');
      } else {
        setMessage('Invalid verification code. Please try again.');
        setMessageType('error');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleResendCode = () => {
    setIsLoading(true);
    // Simulate resend verification code API request
    setTimeout(() => {
      setMessage('Verification code sent again to your email.');
      setMessageType('success');
      setIsLoading(false);
    }, 1000);
  };

  return (
      <AppTheme>
        <Container>
          <FormBox>
            <SitemarkIcon/>

            <Typography variant="h4" align="center" gutterBottom>Verify Your
              Account</Typography>

            <TextField
                variant="outlined"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 4,
                    backgroundColor: '#f5f5f5',
                  },
                  '& .MuiInputBase-input': {
                    padding: '12px', // Adjust padding for better aesthetics
                  },
                }}
            />

            <Button
                variant="contained"
                onClick={handleVerify}
                disabled={isLoading}
                fullWidth
                sx={{padding: '12px'}}
            >
              {isLoading ? <CircularProgress size={24}/> : 'Verify Account'}
            </Button>

            <Button
                variant="text"
                onClick={handleResendCode}
                disabled={isLoading}
                fullWidth
                sx={{padding: '12px'}}
            >
              {isLoading ? <CircularProgress size={24}/>
                  : 'Resend Verification Code'}
            </Button>

            {message && (
                <Typography variant="body2"
                            color={messageType === 'error' ? 'error'
                                : 'success'} align="center">
                  {message}
                </Typography>
            )}
          </FormBox>
        </Container>
      </AppTheme>
  );
}
