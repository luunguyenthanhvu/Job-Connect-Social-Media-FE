import React, {createContext, useCallback, useContext, useState} from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const GlobalErrorContext = createContext();

export const GlobalErrorProvider = ({children}) => {
  const [error, setError] = useState(null);

  const throwError = useCallback((error) => {
    setError(error);
    console.error('Global Error Caught:', error);
  }, []);

  const clearError = () => {
    setError(null);
  };

  return (
      <GlobalErrorContext.Provider value={{throwError, clearError}}>
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
