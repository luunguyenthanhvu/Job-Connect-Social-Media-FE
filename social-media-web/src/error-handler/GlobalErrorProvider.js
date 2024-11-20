import React, {createContext, useCallback, useContext, useState} from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {useNavigate} from 'react-router-dom';

const GlobalErrorContext = createContext();

export const GlobalErrorProvider = ({children}) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleError = useCallback((error) => {
    const errorCode = error?.response?.data?.code;
    const errorMessage = error?.response?.data?.message
        || 'An unexpected error occurred';
    setError({message: errorMessage});
    if (errorCode === 1010) {
      setTimeout(() => {
        navigate('/verify');
      }, 2000);
    } else if (errorCode === 1014) {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }

    console.error('Global Error Caught:', error);
  }, [navigate]);

  const clearError = () => {
    setError(null);
  };

  return (
      <GlobalErrorContext.Provider
          value={{throwError: handleError, clearError}}>
        {children}

        {/* Snackbar to display error */}
        <Snackbar
            open={error !== null}
            autoHideDuration={5000} // 5 seconds duration
            onClose={clearError}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
          {error !== null && (
              <Alert onClose={clearError} severity="error" sx={{width: '100%'}}>
                {error?.message || 'An unexpected error occurred'}
              </Alert>
          )}
        </Snackbar>
      </GlobalErrorContext.Provider>
  );
};

// Hook to use the global error handler
export const useGlobalError = () => useContext(GlobalErrorContext);
