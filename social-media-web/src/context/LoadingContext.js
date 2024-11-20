import React, { createContext, useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
      <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
        {children}
        <Backdrop
            sx={{ color: '#00a5ff', zIndex: (theme) => theme.zIndex.drawer + 1000 }}
            open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </LoadingContext.Provider>
  );
};

// Hook to use loading context
export const useLoading = () => useContext(LoadingContext);
