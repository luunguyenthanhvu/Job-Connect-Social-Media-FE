import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {styled} from '@mui/material/styles';
import {SitemarkIcon} from './CustomIcons';
import AppTheme from '../../components/shared-theme/AppTheme';
import {useGlobalError} from '../../error-handler/GlobalErrorProvider';
import {useLoading} from '../../context/LoadingContext';
import {useNavigate} from 'react-router-dom';
import SuccessAlert from "../../context/SuccessAlert";
import axios from "axios";
import apiConfig from "../../api/apiConfig";

const Card = styled(MuiCard)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
      'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
        'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({theme}) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
          'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props) {
  // Loading content
  const {showLoading, hideLoading} = useLoading();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const {throwError} = useGlobalError();

  // Redirect to other page
  const navigate = useNavigate();

  // Alert info for user
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log(data.get('username'))
    event.preventDefault();
    try {
      showLoading();
      const response = await axios.post(apiConfig.register, {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
        phoneNumber: data.get('phoneNumber'),
      });
      console.log(data.get('email'));
      localStorage.setItem("email", data.get('email'));
      if (response.status === 200) {
        const resultValue = response.data.result;
        // Show success alert
        setAlertMessage('Sign up successful! Redirecting...');
        setOpenAlert(true);

        // Redirect after 2 seconds
        setTimeout(() => {
          navigate('/verify');
        }, 2000);
      }

    } catch (error) {
      throwError(error);
    } finally {
      hideLoading();
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phoneNumber = document.getElementById('phoneNumber');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!phoneNumber.value || phoneNumber.value.length < 10) {
      isValid = false;
    }

    return isValid;
  };

  return (
      <AppTheme {...props}>
        <CssBaseline enableColorScheme/>
        <SignInContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <SitemarkIcon/>
            <Typography
                component="h1"
                variant="h4"
                sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
            >
              Sign up
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  gap: 2,
                }}
            >
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <TextField
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    autoComplete="username"
                    required
                    fullWidth
                    variant="outlined"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                    error={emailError}
                    helperText={emailErrorMessage}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={emailError ? 'error' : 'primary'}
                    sx={{ariaLabel: 'email'}}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    required
                    fullWidth
                    variant="outlined"
                />
              </FormControl>

              <FormControl>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                </Box>
                <TextField
                    error={passwordError}
                    helperText={passwordErrorMessage}
                    name="password"
                    placeholder="••••••"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={validateInputs}
              >
                Sign up
              </Button>

              <Typography sx={{textAlign: 'center'}}>
                Already have an account?{' '}
                <span>
                  <Link
                      href="/login"
                      variant="body2"
                      sx={{alignSelf: 'center'}}
                  >
                    Sign in
                  </Link>
                </span>
              </Typography>
            </Box>
          </Card>
        </SignInContainer>
        <SuccessAlert
            open={openAlert}
            setOpenAlert={setOpenAlert}
            alertMessage={alertMessage}
        />
      </AppTheme>
  );
}
