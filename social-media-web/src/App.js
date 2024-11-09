import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import {Friend, Home, JobPage, Notification, Profile} from './index';
import ForgotPassword from "./page/sign-in/ForgotPassword";
import Login from "./page/sign-in/SignIn";

const App = () => {
  return (
      <Router>
        <ConditionalNavbar/>
        <PageRoutes/>
      </Router>
  );
};

// Check if page needs Navbar
const ConditionalNavbar = () => {
  const location = useLocation();
  const noNavbarPaths = ['/login', '/forgot-password'];

  return !noNavbarPaths.includes(location.pathname) ? <Navbar/> : null;
};

// Component để xử lý hiệu ứng chuyển trang
const PageRoutes = () => {
  const location = useLocation();
  const noNavbarPaths = ['/login', '/forgot-password'];

  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
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
                  hasNavbar={!noNavbarPaths.includes(location.pathname)}><JobPage/></PageTransition>}
          />


          <Route
              path="/profile"
              element={<PageTransition hasNavbar={!noNavbarPaths.includes(
                  location.pathname)}><Profile/></PageTransition>}
          />
          <Route
              path="/login"
              element={<PageTransition
                  hasNavbar={false}><Login/></PageTransition>}
          />
          <Route
              path="/forgot-password"
              element={<PageTransition
                  hasNavbar={false}><ForgotPassword/></PageTransition>}
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
