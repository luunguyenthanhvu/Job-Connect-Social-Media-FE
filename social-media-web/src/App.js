import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import Navbar from './components/navbar/Navbar';

import {
  AccountSetup,
  EmployerProfile,
  Friend,
  Home,
  JobPage,
  Login,
  Message,
  Notification,
  Profile,
  SignUp,
  VerifyAccount
} from './index';
import {GlobalErrorProvider} from "./error-handler/GlobalErrorProvider";
import {LoadingProvider} from './context/LoadingContext';

const noNavbarPaths = ['/', '/login', '/forgot-password', '/register',
  '/verify', '/account-setup'];
const App = () => {
  return (
      <Router>
        <GlobalErrorProvider>
          <LoadingProvider>
            <ConditionalNavbar/>
            <PageRoutes/>
          </LoadingProvider>
        </GlobalErrorProvider>
      </Router>
  );
};

// Check if page needs Navbar
const ConditionalNavbar = () => {
  const location = useLocation();

  return !noNavbarPaths.includes(location.pathname) ? <Navbar/> : null;
};

// Component để xử lý hiệu ứng chuyển trang
const PageRoutes = () => {
  const location = useLocation();

  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
              path="/"
              element={<PageTransition
                  hasNavbar={false}><Login/></PageTransition>}
          />
          <Route
              path="/home"
              element={<PageTransition
                  hasNavbar={!noNavbarPaths.includes(location.pathname)}><Home/></PageTransition>}
          />
          <Route
              path="/friends"
              element={<PageTransition hasNavbar={!noNavbarPaths.includes(
                  location.pathname)}><Friend/></PageTransition>}
          />
          <Route
              path="/notifications"
              element={<PageTransition hasNavbar={!noNavbarPaths.includes(
                  location.pathname)}><Notification/></PageTransition>}
          />
          <Route
              path="/jobs"
              element={<PageTransition
                  hasNavbar={!noNavbarPaths.includes(
                      location.pathname)}><JobPage/></PageTransition>}
          />

          <Route
              path="/messages"
              element={<PageTransition
                  hasNavbar={!noNavbarPaths.includes(
                      location.pathname)}><Message/></PageTransition>}
          />

          <Route
              path="/profile"
              element={<PageTransition hasNavbar={!noNavbarPaths.includes(
                  location.pathname)}><Profile/></PageTransition>}
          />
          <Route
              path="/employer-profile"
              element={<PageTransition hasNavbar={!noNavbarPaths.includes(
                  location.pathname)}><EmployerProfile/></PageTransition>}
          />

          <Route
              path="/account-setup"
              element={<PageTransition hasNavbar={!noNavbarPaths.includes(
                  location.pathname)}><AccountSetup/></PageTransition>}
          />
          <Route
              path="/login"
              element={<PageTransition
                  hasNavbar={false}><Login/></PageTransition>}
          />

          <Route
              path="/register"
              element={<PageTransition
                  hasNavbar={false}><SignUp/></PageTransition>}
          />
          <Route
              path="/verify"
              element={<PageTransition
                  hasNavbar={false}><VerifyAccount/></PageTransition>}
          />
        </Routes>
      </AnimatePresence>
  );
};

// Component dùng để bọc từng trang với hiệu ứng chuyển động
const PageTransition = ({children, hasNavbar}) => (
    <motion.div
        initial={{opacity: 0, x: 100}}
        animate={{
          opacity: 1,
          x: 0
        }}
        exit={{opacity: 0, x: -100}}
        transition={{duration: 0.3}}
        style={{
          padding: '10px 24px',
          minHeight: '100vh',
          marginTop: hasNavbar ? '70px' : '0',
          backgroundColor: '#F3F2F2'
        }}
    >
      {children}
    </motion.div>
);

export default App;
