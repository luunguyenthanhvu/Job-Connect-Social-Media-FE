// src/context/ErrorContext.js
import React, { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (message) => {
    setError(message);
  };

  const clearError = () => {
    setError(null);
  };

  return (
      <ErrorContext.Provider value={{ error, handleError, clearError }}>
        {children}
        {error && (
            <div className="error-popup">
              <p>{error}</p>
              <button onClick={clearError}>Đóng</button>
            </div>
        )}
      </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
