// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import Home from './page/home/Home';
import Friend from './page/friend/Friend';
import Jobs from './page/job/Job';
import Profile from './page/profile/Profile';
import Company from './page/company/Company';

const App = () => {
  return (
      <Router>
        <Navbar />
        <PageRoutes />
      </Router>
  );
};

// Component để xử lý hiệu ứng chuyển trang
const PageRoutes = () => {
  const location = useLocation();

  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
              path="/home"
              element={<PageTransition><Home /></PageTransition>}
          />
          <Route
              path="/friends"
              element={<PageTransition><Friend /></PageTransition>}
          />
          <Route
              path="/company"
              element={<PageTransition><Company /></PageTransition>}
          />
          <Route
              path="/jobs"
              element={<PageTransition><Jobs /></PageTransition>}
          />
          <Route
              path="/profile"
              element={<PageTransition><Profile /></PageTransition>}
          />
        </Routes>
      </AnimatePresence>
  );
};

// Component dùng để bọc từng trang với hiệu ứng chuyển động
const PageTransition = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, x: 100 }} // Vị trí bắt đầu (lệch sang phải)
        animate={{ opacity: 1, x: 0 }}   // Hoạt ảnh khi vào trang (trở về vị trí giữa)
        exit={{ opacity: 0, x: -100 }}    // Hoạt ảnh khi thoát (lệch sang trái)
        transition={{ duration: 0.3 }}    // Tốc độ chuyển đổi
        style={{ paddingTop: '10px', marginTop: '80px' }} // Thêm khoảng cách
    >
      {children}
    </motion.div>
);

export default App;
