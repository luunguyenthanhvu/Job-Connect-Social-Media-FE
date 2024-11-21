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
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import {useGlobalError} from '../../error-handler/GlobalErrorProvider';
import {useNavigate} from "react-router-dom";

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
  background: '#fff',
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

  const {throwError} = useGlobalError();

  // Redirect to other page
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!verificationCode) {
      setMessage('Please enter the verification code.');
      setMessageType('error');
      return;
    }
    setIsLoading(true);
    console.log("email user ne " + localStorage.getItem('email'))
    try {
      setIsLoading(true);
      const response = await axios.post(apiConfig.verify, {
        email: localStorage.getItem('email'),
        code: verificationCode
      });

      if (response.status === 200) {
        const resultValue = response.data.result;
        if (resultValue.message === 'Verify code out date.') {
          console.log("Lỗi hết hạn nè")
          setIsLoading(true);
          // Simulate resend verification code API request
          setTimeout(() => {
            setMessage(
                'Verify code out date. Verification code sent again to your email.');
            setMessageType('error');
            setIsLoading(false);
          }, 1000);
        } else {
          setMessage('Verify successfully!');
          setMessageType('success');
          // Redirect after 2 seconds
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        }
      }

    } catch (error) {
      console.log(error)
      throwError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(apiConfig.resendVerifyCode, {
        email: localStorage.getItem('email'),
        code: verificationCode
      });

      if (response.status === 200) {
        setTimeout(() => {
          setMessage('Verification code sent again to your email.');
          setMessageType('success');
        }, 1000);
      }
    } catch (error) {
      throwError(error);
    }  finally {
      setIsLoading(false);
    }
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
                placeholder="••••••"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 4,
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
